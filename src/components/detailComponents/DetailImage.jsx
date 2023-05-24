import "./DetailImage.css"

const DetailImage = (props) => {
    // let background = `--background: url(${image})`
    let background = props.image
    let title = props.title

    return (
        <div className="recipe-image"
       style = {{ background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
            url(${background})`,
          backgroundSize: "cover"}}>
            <div className="details-title"><h1>{title}</h1></div>
        </div>
    )
}

export default DetailImage