import {useState} from 'react'

export default function ExpandableCard () {
    const [detailsVisible, setDetailsVisible] = useState(false);

    return (
        <div>
            <h4>Expandable Card</h4>
            <button onClick={() => setDetailsVisible(!detailsVisible)}>{detailsVisible ? 'Hide Details' : 'Show Details'}</button>
            {detailsVisible && <div>Here are the details</div>}
        </div>
    )

}