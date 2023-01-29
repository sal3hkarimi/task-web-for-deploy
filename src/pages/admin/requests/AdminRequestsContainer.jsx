import { useState } from "react";
import FilterBarAdmin from "../home/FilterBarAdmin";
import ContentNewRequests from "./ContentNewRequests";

export default function AdminRequestsContainer() {
    const [active, setActive] = useState(0)
    const listFilterBar = ['جدید', 'تایید شده', 'رد شده']
    return (
        <div className="admin-container">
            <FilterBarAdmin setAct={setActive} isActive={active} listItem={listFilterBar} />
            {
                active === 0 ? <ContentNewRequests/>
                    : active === 1 ? <div>ContentImportantAdmin</div>
                        : active === 2 ? <div>ContentCommentAdmin</div>
                            : null
            }
        </div>
    )
}
