function ConfirmPopUp({ onConfirm, communicate, id}) {

    const handleButtonClick = (event) => {

    }

    return <div className="popup">
        <div>
            {communicate}
        </div>
        <div>
            <button value='Confirm' onClick={() => onConfirm(id)}>
                Confirm
            </button>
            <button value='Confirm'>
                Cancel
            </button>
        </div>
    </div>
}

export default ConfirmPopUp;