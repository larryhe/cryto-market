export const Card = ({ name, image, url }) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={image} alt={name} />
                <a href={url}>{name}</a>
            </div>
        </div>
    );
};
