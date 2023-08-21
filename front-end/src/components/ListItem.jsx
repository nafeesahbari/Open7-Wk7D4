function ListItem({ title, description, time }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Time: {time}</p>
    </li>
  );
}

export default ListItem;
