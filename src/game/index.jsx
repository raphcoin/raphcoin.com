import React from 'react';
import moment from 'moment';
import { ReactiveComponent, Rspan } from 'oo7-react';
const { Pretty } = require('../Pretty');
import { Card } from 'semantic-ui-react'

export class GameInfo extends ReactiveComponent {
    constructor(props) {
        super(['res', 'time'])
    }
    readyRender() {
        const { res, time } = this.state;

        const accrual = res.accrual * 1;
        const amount = res.resource_amount * 1;
        const diff = moment(time).unix() - res.time;

        const balance = amount + (accrual * res.rate * diff);

        return <Card>
                    <Card.Content>
                        <h1>Golden mine</h1>
                        <Card.Header><Pretty value={res.level} className="limit-name" prefix="Level " /></Card.Header>
                        <Card.Meta>
                            <Pretty value={res.time} className="limit-dna" prefix="Time " />
                        </Card.Meta>
                        <Card.Content extra>
                            <Pretty value={res.accrual} prefix="Amount " />
                        </Card.Content>
                        <Rspan>
                            <b>Every</b>: {res.rate} sec
                        </Rspan>
                        &nbsp;
                        <br />
                    </Card.Content>
                    <Card.Content extra>
                        <Pretty value={balance} prefix="Balance " />
                    </Card.Content>
                </Card>;
    }
}
