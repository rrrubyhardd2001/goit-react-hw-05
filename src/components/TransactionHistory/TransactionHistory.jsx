import style from "./Transaction.module.css";
export default function Transaction({ items }) {
  return (
    <table className={style.tableHistory}>
      <thead className={style.theadHistory}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, rowIndex) => (
          <tr key={id}>
            <td
              className={style.tbodyHistory}
              style={{
                backgroundColor: rowIndex % 2 === 1 ? "grey" : "white",
                color: rowIndex % 2 === 1 ? "white" : "grey",
              }}
            >
              {type}
            </td>
            <td
              className={style.tbodyHistory}
              style={{
                backgroundColor: rowIndex % 2 === 1 ? "grey" : "white",
                color: rowIndex % 2 === 1 ? "white" : "grey",
              }}
            >
              {amount}
            </td>
            <td
              className={style.tbodyHistory}
              style={{
                backgroundColor: rowIndex % 2 === 1 ? "grey" : "white",
                color: rowIndex % 2 === 1 ? "white" : "grey",
              }}
            >
              {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
