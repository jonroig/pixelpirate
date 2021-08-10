

const Pixelblock = (pixelObj) => {

    return (
        <div key={pixelObj.id} className={"mdhpItem"}>
            {pixelObj.title}
        </div>
    );
};

export default Pixelblock;