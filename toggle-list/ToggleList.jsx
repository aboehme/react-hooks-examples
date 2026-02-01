import { useState } from "react";

export default function ToggleList () {

    const list = [{id:1,title:"Item One",details:"These are the details for item one"},
        {id:2,title:"Item Two", details:"Here are the item two details"}, {id:3, title:"Item Three", details:"Details for item three"}
        ];

    const [expandedIds, setExpandedIds] = useState(() => new Set());

    function toggle(id) {
        setExpandedIds((prev) => {
            const next = new Set(prev); 
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    }


    return (
        <div>
            {list.map((item) => {
                const isExpanded = expandedIds.has(item.id);
                return (
                <div key={item.id}>
                    <button onClick={() => toggle(item.id)}>{item.title}</button>
                    {isExpanded && <div>{item.details}</div>}
                </div>
                );
            })}
        </div>
    );
}