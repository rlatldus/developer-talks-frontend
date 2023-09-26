import "../../../main/main.scss";

const TableItem2 = ({ data }) => {

    return (
        <li className="flex">
            <div className="w1">
                <p className="text">{data.title}</p>
            </div>
            <div className="w2">
                <p className="text">{data.content}</p>
            </div>
            <div className="w3">
                <p className="text">{data.writer}</p>
            </div>
            <div className="w4">
                <p className="text">{data.modifiedDate}</p>
            </div>
            <div className="w5">
                <p className="text">{data.viewCount}</p>
            </div>
        </li>
    );
};

export default TableItem2;
