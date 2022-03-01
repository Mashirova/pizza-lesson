import './ControlItem.css';

const ControlItem = ({name, count, add, remove}) => {
  return (
      <div className="pizza-control__item" onClick={add} role="button">
        <img
          src={`img/${name}-icon.png`}
          alt={name}
          className="pizza-control__img"
          />
          <h4 className="pizza-control__title">{name}</h4>
          {count > 0 ?(<div onClick={remove} className="ingredient-count">{count}</div>) : null}
      </div>
  );
};
export default ControlItem;
