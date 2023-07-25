import './NumberButton.css'

export default function OperationButton({ operation, onClick, twoSpots }) {
    let c = '';
    (twoSpots) ? c = 'twoSpots' : c = '';
    return (
        <div>
            <button onClick={onClick} className={c}>{operation}</button>
        </div>
    )
} 