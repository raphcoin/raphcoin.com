import React from 'react';
require('semantic-ui-css/semantic.min.css');
import { Icon, Accordion, List, Checkbox, Label, Header, Segment, Divider, Button } from 'semantic-ui-react';
import { Bond, TransformBond } from 'oo7';
import { ReactiveComponent, If, Rspan } from 'oo7-react';
import {
	calls, runtime, chain, system, runtimeUp, ss58Decode, ss58Encode, pretty,
	addressBook, secretStore, metadata, nodeService, bytesToHex, hexToBytes, AccountId
} from 'oo7-substrate';
import Identicon from 'polkadot-identicon';
import { AccountIdBond, SignerBond } from './AccountIdBond.jsx';
import { BalanceBond } from './BalanceBond.jsx';
import { InputBond } from './InputBond.jsx';
import { TransactButton } from './TransactButton.jsx';
import { FileUploadBond } from './FileUploadBond.jsx';
import { WalletList, SecretItem } from './WalletList';
import { GameInfo } from './game';
import { TransformBondButton } from './TransformBondButton';
import { Pretty } from './Pretty';

export class App extends ReactiveComponent {
	constructor() {
		super([], { ensureRuntime: runtimeUp })

		// For debug only.
		window.runtime = runtime;
		window.secretStore = secretStore;
		window.addressBook = addressBook;
		window.chain = chain;
		window.calls = calls;
		window.system = system;
		window.that = this;
		window.metadata = metadata;

		addCodecTransform('Resource<Balance>', {
            level: "u32",
            time: "u64",
            accrual: "Balance",
            rate: "u32",
            resource_amount: "Balance"
        });
	}

	readyRender() {
		return (<div>
			<Heading />
			<Game />
			<Divider hidden />
			<UpgradeSegment />
			<Divider hidden />
			<WalletSegment />
		</div>);
	}
}

class Heading extends React.Component {
	render() {
		return <div>
			<If
				condition={nodeService().status.map(x => !!x.connected)}
				then={<Label>Connected <Label.Detail>
					<Pretty className="value" value={nodeService().status.sub('connected')} />
				</Label.Detail></Label>}
				else={<Label>Not connected</Label>}
			/>
			<Label>Name <Label.Detail>
				<Pretty className="value" value={system.name} /> v<Pretty className="value" value={system.version} />
			</Label.Detail></Label>
			<Label>Chain <Label.Detail>
				<Pretty className="value" value={system.chain} />
			</Label.Detail></Label>
			<Label>Runtime <Label.Detail>
				<Pretty className="value" value={runtime.version.specName} /> v<Pretty className="value" value={runtime.version.specVersion} /> (
					<Pretty className="value" value={runtime.version.implName} /> v<Pretty className="value" value={runtime.version.implVersion} />
				)
			</Label.Detail></Label>
			<Label>Height <Label.Detail>
				<Pretty className="value" value={chain.height} /> (with <Pretty className="value" value={chain.lag} /> lag)
			</Label.Detail></Label>
			<Label>Authorities <Label.Detail>
				<Rspan className="value">{
					runtime.core.authorities.mapEach((a, i) => <Identicon key={bytesToHex(a) + i} account={a} size={16} />)
				}</Rspan>
			</Label.Detail></Label>
			<Label>Total issuance <Label.Detail>
				<Pretty className="value" value={runtime.balances.totalIssuance} />
			</Label.Detail></Label>
		</div>
	}
}

class WalletSegment extends React.Component {
	constructor() {
		super()
		this.seed = new Bond;
		this.seedAccount = this.seed.map(s => s ? secretStore().accountFromPhrase(s) : undefined)
		this.seedAccount.use()
		this.name = new Bond;
	}
	render() {
		return <Segment style={{ margin: '1em' }}>
			<Header as='h2'>
				<Icon name='key' />
				<Header.Content>
					Wallet
					<Header.Subheader>Manage your secret keys</Header.Subheader>
				</Header.Content>
			</Header>
			<div style={{ paddingBottom: '1em' }}>
				<div style={{ fontSize: 'small' }}>seed</div>
				<InputBond
					bond={this.seed}
					reversible
					placeholder='Some seed for this key'
					validator={n => n || null}
					action={<Button content="Another" onClick={() => this.seed.trigger(secretStore().generateMnemonic())} />}
					iconPosition='left'
					icon={<i style={{ opacity: 1 }} className='icon'><Identicon account={this.seedAccount} size={28} style={{ marginTop: '5px' }} /></i>}
				/>
			</div>
			<div style={{ paddingBottom: '1em' }}>
				<div style={{ fontSize: 'small' }}>name</div>
				<InputBond
					bond={this.name}
					placeholder='A name for this key'
					validator={n => n ? secretStore().map(ss => ss.byName[n] ? null : n) : null}
					action={<TransformBondButton
						content='Create'
						transform={(name, seed) => secretStore().submit(seed, name)}
						args={[this.name, this.seed]}
						immediate
					/>}
				/>
			</div>
			<div style={{ paddingBottom: '1em' }}>
				<WalletList />
			</div>
		</Segment>
	}
}

class UpgradeSegment extends React.Component {
	constructor() {
		super()
		this.conditionBond = runtime.metadata.map(m =>
			m.modules && m.modules.some(o => o.name === 'sudo')
			|| m.modules.some(o => o.name === 'upgrade_key')
		)
		this.runtime = new Bond
	}
	render() {
		return <If condition={this.conditionBond} then={
			<Segment style={{ margin: '1em' }} padded>
				<Header as='h2'>
					<Icon name='search' />
					<Header.Content>
						Runtime Upgrade
						<Header.Subheader>Upgrade the runtime using the UpgradeKey module</Header.Subheader>
					</Header.Content>
				</Header>
				<div style={{ paddingBottom: '1em' }}></div>
				<FileUploadBond bond={this.runtime} content='Select Runtime' />
				<TransactButton
					content="Upgrade"
					icon='warning'
					tx={{
						sender: runtime.sudo
							? runtime.sudo.key
							: runtime.upgrade_key.key,
						call: calls.sudo
							? calls.sudo.sudo(calls.consensus.setCode(this.runtime))
							: calls.upgrade_key.upgrade(this.runtime)
					}}
				/>
			</Segment>
		} />
	}
}

class Game extends React.Component {
	constructor() {
		super()
        this.account = new Bond;
	}
	render() {
		return <Segment style={{ margin: '1em' }}>
			<Header as='h2'>
				<Icon name='key' />
				<Header.Content>
					Game
					<Header.Subheader>The best game ever</Header.Subheader>
				</Header.Content>
			</Header>
			<SignerBond bond={this.account} />
            <TransactButton
                content="Init account"
                icon='paw'
                tx={{
                    sender: runtime.indices.tryIndex(this.account),
                    call: calls.template.init()
                }}
            />
            <TransactButton
                content="But golden mine"
                icon='paw'
                tx={{
                    sender: runtime.indices.tryIndex(this.account),
                    call: calls.template.buyGoldenMine()
                }}
            />
            <TransactButton
                content="Level up"
                icon='paw'
                tx={{
                    sender: runtime.indices.tryIndex(this.account),
                    call: calls.template.levelUp()
                }}
            />
			<GameInfo
				res={runtime.template.goldenMines(this.account)}
				time={runtime.timestamp.now}
			/>
		</Segment>
	}
}
