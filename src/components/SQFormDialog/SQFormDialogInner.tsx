import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
  Slide,
  makeStyles,
} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import {Form, useFormikContext} from 'formik';
import {useDialog} from '@selectquotelabs/sqhooks';
import {RoundedButton, DialogAlert} from 'scplus-shared-components';
import SQFormButton from '../SQForm/SQFormButton';
import SQFormHelperText from '../SQForm/SQFormHelperText';
import type {DialogProps, GridProps, ButtonProps} from '@material-ui/core';
import type {Theme} from '@material-ui/core/styles';
import type {TransitionProps} from '@material-ui/core/transitions';
import type {FormikContextType, FormikValues} from 'formik';
import type {SQFormDialogTertiaryValue} from './types';

type SQFormDialogInnerProps<Values extends FormikValues> = {
  /** The secondary button text (Button located on left side of Dialog) */
  cancelButtonText?: string;
  /** The content to be rendered in the dialog body */
  children: React.ReactNode;
  /** If true, clicking the backdrop will not fire the onClose callback. */
  disableBackdropClick?: boolean;
  /** The current disabled state of the Dialog Save Button */
  isDisabled?: boolean;
  /** The current open/closed state of the Dialog */
  isOpen: boolean;
  /** Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth. */
  maxWidth?: DialogProps['maxWidth'];
  /** Callback function invoked when the user clicks on the secondary button or outside the Dialog */
  onClose: (
    event: Record<string, unknown>,
    reason: 'backdropClick' | 'escapeKeyDown' | 'cancelClick'
  ) => void;
  /** Whether to show save/submit button (default: true) */
  shouldDisplaySaveButton: boolean;
  /** The primary button text (Button located on right side of Dialog) */
  saveButtonText?: string;
  /** Whether or not the dialog form requires updates to the form to enable the submit button */
  shouldRequireFieldUpdates?: boolean;
  /** Title text at the top of the Dialog */
  title: string;
  /**
   * determine the status of the tertiary button
   * can be one of'HIDE_BUTTON'|'NO_VALIDATION'|'IS_DISABLED'|'IS_ENABLED'|'FORM_VALIDATION_ONLY'|'IS_DISABLED_AND_FORM_VALIDATION',
   * this will determine if the button is rendered, as well as if the button is disabled and if it uses form validation.
   */
  tertiaryStatus: SQFormDialogTertiaryValue;
  /** Any prop from https://material-ui.com/api/grid */
  muiGridProps?: GridProps;
  /** Determine if the secondary action button should be displayed */
  showSecondaryButton?: boolean;
  /** The tertiary button text */
  tertiaryButtonText?: string;
  /** Callback function invoked when the user clicks the tertiary button */
  onTertiaryClick?: (formikContext: FormikContextType<Values>) => void;
  /** Variant to be used for the tertiary button. Defaults to 'outlined' */
  tertiaryButtonVariant?: ButtonProps['variant'];
  /** text to pass to SQFormHelperText component */
  helperText?: string;
  /** helper text type to pass to SQFormHelperText component */
  helperTextType?: 'fail' | 'error' | 'valid';
};

/*
const Transition = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <Slide direction="down" ref={ref} {...props}>{undefined}</Slide>;
});
*/
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {children?: React.ReactElement<unknown, string>},
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const stickyStyles = {
  position: 'sticky' as React.CSSProperties['position'],
  background: ({palette}: Theme) => palette.background.paper,
  zIndex: 1,
};

const useTitleStyles = makeStyles({
  root: {
    ...stickyStyles,
    top: 0,
    borderBottom: ({palette}: Theme) => `1px solid ${palette.divider}`,
  },
});
const actionStyles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '1 1 100%',
    padding: '10px 20px',
    ...stickyStyles,
    bottom: 0,
    borderTop: ({palette}: Theme) => `1px solid ${palette.divider}`,
  },
};
const useActionsStyles = makeStyles(actionStyles);
const usePrimaryActionStyles = makeStyles({
  root: {...actionStyles.root, justifyContent: 'flex-end'},
});
const useDialogContentStyles = makeStyles({
  root: {
    overflowY: 'visible',
    padding: '20px',
  },
});

function SQFormDialogInner<Values extends FormikValues>({
  cancelButtonText,
  children,
  disableBackdropClick,
  isDisabled = false,
  isOpen,
  maxWidth,
  onClose,
  saveButtonText,
  tertiaryButtonText,
  shouldRequireFieldUpdates = false,
  title,
  muiGridProps,
  shouldDisplaySaveButton = true,
  showSecondaryButton = true,
  tertiaryStatus = 'HIDE_BUTTON',
  onTertiaryClick,
  tertiaryButtonVariant,
  helperText,
  helperTextType = 'error',
}: SQFormDialogInnerProps<Values>): React.ReactElement {
  const theme = useTheme();
  const titleClasses = useTitleStyles(theme);
  const actionsClasses = useActionsStyles(theme);
  const primaryActionsClasses = usePrimaryActionStyles(theme);
  const dialogContentClasses = useDialogContentStyles(theme);
  const formikContext = useFormikContext<Values>();

  function getIsDisabled() {
    switch (tertiaryStatus) {
      case 'IS_DISABLED':
        return true;
      case 'FORM_VALIDATION_ONLY':
        return !formikContext.isValid;
      default:
        return false;
    }
  }

  const {
    isDialogOpen: isDialogAlertOpen,
    openDialog: openDialogAlert,
    closeDialog: closeDialogAlert,
  } = useDialog();

  const handleCancel = (
    event: Record<string, unknown>,
    reason: 'backdropClick' | 'escapeKeyDown' | 'cancelClick'
  ) => {
    if (disableBackdropClick && reason === 'backdropClick') {
      return;
    }

    if (!formikContext.dirty) {
      onClose && onClose(event, reason);
    } else {
      openDialogAlert();
    }
  };

  const confirmCancel = () => {
    formikContext.resetForm();
    onClose && onClose({}, 'escapeKeyDown');
    closeDialogAlert();
  };

  const renderTertiaryButton = () => {
    return (
      <Grid
        container={true}
        justifyContent={showSecondaryButton ? 'space-between' : 'flex-end'}
      >
        {showSecondaryButton && (
          <Grid item={true}>
            <RoundedButton
              title={cancelButtonText}
              onClick={(event: Record<string, unknown>) =>
                handleCancel(event, 'cancelClick')
              }
              color="secondary"
              variant="outlined"
            >
              {cancelButtonText}
            </RoundedButton>
          </Grid>
        )}

        {helperText && renderHelperText()}
        <Grid item={true}>
          <span style={{paddingRight: '20px'}}>
            <RoundedButton
              title={tertiaryButtonText}
              isDisabled={getIsDisabled()}
              onClick={() => onTertiaryClick?.(formikContext)}
              type="button"
              variant={tertiaryButtonVariant}
            >
              {tertiaryButtonText}
            </RoundedButton>
          </span>
          {shouldDisplaySaveButton && (
            <SQFormButton
              title={saveButtonText}
              isDisabled={isDisabled}
              shouldRequireFieldUpdates={shouldRequireFieldUpdates}
            >
              {saveButtonText}
            </SQFormButton>
          )}
        </Grid>
      </Grid>
    );
  };

  const renderHelperText = () => {
    switch (helperTextType) {
      case 'fail':
        return (
          <Grid item={true}>
            <SQFormHelperText isFailedState={true} failText={helperText} />
          </Grid>
        );
      case 'valid':
        return (
          <Grid item={true}>
            <SQFormHelperText isValidState={true} validText={helperText} />
          </Grid>
        );
      default:
        return (
          <Grid item={true}>
            <SQFormHelperText isValidState={false} errorText={helperText} />
          </Grid>
        );
    }
  };

  return (
    <>
      <Dialog
        maxWidth={maxWidth}
        open={isOpen}
        TransitionComponent={Transition}
        onClose={
          showSecondaryButton || disableBackdropClick ? handleCancel : undefined
        }
      >
        <Form>
          <DialogTitle disableTypography={true} classes={titleClasses}>
            <Typography variant="h4">{title}</Typography>
          </DialogTitle>
          <DialogContent classes={dialogContentClasses}>
            <Grid
              {...muiGridProps}
              container
              spacing={muiGridProps?.spacing ?? 2}
            >
              {children}
            </Grid>
          </DialogContent>
          <DialogActions
            classes={
              showSecondaryButton ? actionsClasses : primaryActionsClasses
            }
          >
            {tertiaryStatus !== 'HIDE_BUTTON'
              ? renderTertiaryButton()
              : showSecondaryButton && (
                  <RoundedButton
                    title={cancelButtonText}
                    onClick={(event: Record<string, unknown>) =>
                      handleCancel(event, 'cancelClick')
                    }
                    color="secondary"
                    variant="outlined"
                  >
                    {cancelButtonText}
                  </RoundedButton>
                )}
            {tertiaryStatus === 'HIDE_BUTTON' && shouldDisplaySaveButton && (
              <>
                {helperText && renderHelperText()}
                <SQFormButton
                  title={saveButtonText}
                  isDisabled={isDisabled}
                  shouldRequireFieldUpdates={shouldRequireFieldUpdates}
                >
                  {saveButtonText}
                </SQFormButton>
              </>
            )}
          </DialogActions>
        </Form>
      </Dialog>

      <DialogAlert
        isOpen={isDialogAlertOpen}
        primaryButtonText="Continue"
        secondaryButtonText="Go Back"
        onPrimaryButtonClick={confirmCancel}
        onSecondaryButtonClick={closeDialogAlert}
        title={`Cancel Changes`}
      >
        You currently have unsaved changes which will be lost if you continue.
      </DialogAlert>
    </>
  );
}

export default SQFormDialogInner;
