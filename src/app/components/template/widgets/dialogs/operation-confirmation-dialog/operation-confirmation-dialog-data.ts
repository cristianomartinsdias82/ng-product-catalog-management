export interface OperationConfirmationDialogData
{
    question: string;
    onYesClick?: () => void;
    onNoClick?: () => void;
}