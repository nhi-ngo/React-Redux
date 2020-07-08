import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imgRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef);
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // console.log(this); // 'this' here refers to an instance of ImageCard component
    // console.log(this.imgRef.current.clientHeight);

    const height = this.imgRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans });
  }

  render() {
    const { urls, description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imgRef}
          src={urls.regular}
          alt={description}
        />
      </div>
    );
  }
}

export default ImageCard;

// Passing setSpans() callback to addEventListener will remove the context of 'this'
// so callback has to be bound by using arrow function

// grid-auto-rows: 150px of wrapping div
// const spans = Math.ceil(height / 150 + 1);

// Now if grid-auto-rows: 10px
// grid-auto-rows: 10px of wrapping div
// const spans = Math.ceil(height / 10 + 1);
