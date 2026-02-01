import {useState} from 'react';

export default function ExpandableCard () {
    const [detailsVisible, setDetailsVisible] = useState(false);

    return (
        <div className="card">
            <h4>Expandable Card</h4>

            <button onClick={() => setDetailsVisible(prev => !prev)}
            aria-expanded={detailsVisible}>{detailsVisible ? 'Hide Details' : 'Show Details'}</button>
            
            {detailsVisible && (
                <div className="card-details">
                    Here are the details
                </div>
            )}
        </div>
    );
}