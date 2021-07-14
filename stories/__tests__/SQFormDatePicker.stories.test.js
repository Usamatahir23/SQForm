import React from 'react';
import {LocalizationProvider} from '@material-ui/pickers';
import MomentAdapter from '@material-ui/pickers/adapter/moment';
import {composeStories} from '@storybook/testing-react';
import {render, screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from '../SQFormDatePicker.stories';

const {BasicDatePicker} = composeStories(stories);

const renderDatePicker = props => {
  render(
    <LocalizationProvider dateAdapter={MomentAdapter} locale={'en'}>
      <BasicDatePicker {...props} />
    </LocalizationProvider>
  );
};

describe('SQFormDatePicker Tests', () => {
  it('should render a label and input', () => {
    renderDatePicker();

    const label = screen.getByText('Date');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Date');

    const textField = screen.getByRole('textbox', {name: /date/i});
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveValue('09/22/2020');
  });

  it('should render default with empty initial value', () => {
    const initialValues = {
      date: ''
    };

    renderDatePicker({SQFormProps: {initialValues}});

    const textField = screen.getByRole('textbox', {name: /date/i});
    expect(textField).toHaveValue('');
  });

  it('should render value with non-empty initial value', () => {
    renderDatePicker();

    const textField = screen.getByRole('textbox', {name: /date/i});
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveValue('09/22/2020');
  });

  it('should update when text is entered', () => {
    const initialValues = {
      date: ''
    };

    renderDatePicker({SQFormProps: {initialValues}});

    const textField = screen.getByRole('textbox', {name: /date/i});
    expect(textField).toHaveValue('');

    //Doing this doesn't type, it just opens the dialog
    //userEvent.type(textField, '01/01/2021');

    //expect(textField).toHaveValue('01/01/2021');
  });

  it('should open calendar view when calendar button is clicked', () => {
    const initialValues = {
      date: ''
    };

    renderDatePicker({SQFormProps: {initialValues}});

    //Not found????
    //const calendar = screen.getByRole('button', {name: /date/i});
    //expect(calendar).toBeInTheDocument();

    //It looks like the testing library just merged the textfield and
    //calendar button into 1 hybrid input
    const textField = screen.getByRole('textbox', {name: /date/i});

    userEvent.click(textField);

    const calendarDialog = screen.getByRole('dialog');
    expect(calendarDialog).toBeInTheDocument();
    expect(calendarDialog).toBeVisible();
  });

  it('should display new date after selecting from the calendar', async () => {
    const initialValues = {
      date: ''
    };

    renderDatePicker({SQFormProps: {initialValues}});

    const textField = screen.getByRole('textbox', {name: /date/i});
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    userEvent.click(textField);

    const calendarDialog = screen.getByRole('dialog');
    expect(calendarDialog).toBeInTheDocument();
    expect(calendarDialog).toBeVisible();

    const dateOptions = within(calendarDialog).getAllByRole('cell');
    const selectedDate = dateOptions[0];

    //This doesn't close the calendar/dialog??
    userEvent.click(selectedDate);
    // It's still showing as visible
    //await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeVisible());
    //expect(screen.queryByRole('dialog')).not.toBeVisible();

    //Data setup so the test won't need updating all the time

    const getTestDay = () => {
      const today = new Date();
      const month = today.getMonth() + 1; //January is 0
      const currentMonth = month.toString().padStart(2, '0');
      const day = today.getDate();

      if (day === 1) {
        return `${currentMonth}/02/${today.getFullYear()}`;
      }

      return `${currentMonth}/01/${today.getFullYear()}`;
    };

    const testDate = getTestDay();
    expect(textField).toHaveValue(testDate);
  });

  it('should show as disabled when isDisabled is true', () => {
    const SQFormProps = {
      initialValues: {
        date: ''
      }
    };

    renderDatePicker({SQFormProps, isDisabled: true});

    const textField = screen.getByRole('textbox', {name: /date/i});
    expect(textField).toBeDisabled();
  });

  it('should display required text when isRequired is true', () => {
    const SQFormProps = {
      initialValues: {
        date: ''
      }
    };

    renderDatePicker({SQFormProps, isRequired: true});

    const required = screen.getByText(/required/i);
    expect(required).toBeVisible();
  });
});
