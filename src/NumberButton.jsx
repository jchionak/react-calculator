import './NumberButton.css'

export default function NumberButton({ num, onClick, twoSpots }) {
    let c = '';
    (twoSpots) ? c = 'twoSpots' : c = '';
    return (
        <div>
            <button onClick={onClick} className={c}>{num}</button>
        </div>
    )
}