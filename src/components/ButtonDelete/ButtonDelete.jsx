import iconDelete from './delete.svg';

const ButtonDelete = ({ deleteProduct, id }) => {
    return (
        <button type="button" onClick={() => {deleteProduct(id)}}>
            <img src={iconDelete} alt="Delete" />
        </button>
    );
}

export default ButtonDelete;