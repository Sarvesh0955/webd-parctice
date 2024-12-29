import './propertiesList.css';

function PropertiesList({ properties }) {
  return (
    <div>
      <ul className="properties-list">
        {properties.map((property) => (
          <li key={property.id}>
            <h2>{property.name}</h2>
            <p>${property.price} a night.</p>
            <p>{property.rating} star</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertiesList;