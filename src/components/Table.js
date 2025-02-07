function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>campaign name</th>
          <th>created by</th>
          <th>created at</th>
          <th>start</th>
          <th>end</th>
          <th>campaign usage</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(value => {
          return (
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>{value.campaignName}</td>
              <td>{value.createdBy}</td>
              <td>{value.createdAt}</td>
              <td>{value.start}</td>
              <td>{value.end}</td>
              <td>{value.campaignUsage}</td>
              <td>dotIcon</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
