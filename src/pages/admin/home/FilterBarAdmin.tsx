import { FC } from "react";
import Button from "../../../components/Button";


type FilterBarAdmin = {
    setAct: Function;
    isActive: number;
    listItem: Array<string>;
    button?: string
}


const FilterBarAdmin: FC<FilterBarAdmin> = ({ setAct, isActive, listItem, button }) => {

    return (
        <div className="filterbar">
            <ul className='admin-items'>
                {listItem.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => setAct(index)}
                        className={index === isActive ? 'active' : ''}
                    >{item}</li>
                ))}
            </ul>
            {button ? <Button
                type="button"
                value={button}
                isIcon={false}
                classN="btn--accept"
            /> : null}
        </div>
    )
}

export default FilterBarAdmin;