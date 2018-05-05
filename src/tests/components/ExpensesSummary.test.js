import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render ExpensesSummary with single expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={10235}/>);
    expect(wrapper).toMatchSnapshot();
});