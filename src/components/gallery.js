import React,{Component} from 'react';
import Lightbox from 'react-image-lightbox';

class Gallery extends Component{

	  constructor(props) {
    	super(props);

    	this.state = {
			photoIndex: 0,
      		isOpen:false,
			images:[
				{
					id: 0,
					src: require("../images/gallery/DSC_0154.jpg"),
					className: 'v-img'
				},
				{
					id: 1,
					src: require("../images/gallery/DSC_0292.jpg"),
				},
				{
					id: 2,
					src: require("../images/gallery/DSC_0218.jpg"),		
				},
				{
					id: 3,
					src: require("../images/gallery/DSC_0208.jpg"),
					className: 'v-img'
				},
				{
					id: 4,
					src: require("../images/gallery/DSC_0279.jpg"),
				},
				{
					id: 5,
					src: require("../images/gallery/DSC_0345.jpg"),
				},
				{
					id: 6,
					src: require("../images/gallery/DSC_0359.jpg"),
				},
				{
					id: 7,
					src: require("../images/gallery/DSC_0396.jpg"),
				},
				{
					id: 8,
					src: require("../images/gallery/DSC_0443.jpg"),
					className: 'v-img'
				},
				{
					id: 9,
					src: require("../images/gallery/DSC_0481.jpg"),
				},
				{
					id: 10,
					src: require("../images/gallery/DSC_0479.jpg"),
					className: 'v-img'
				},
				{
					id: 11,
					src: require("../images/gallery/DSC_0490.jpg"),
					className: 'v-img'
				},
				{
					id: 12,
					src: require("../images/gallery/DSC_0433.jpg"),
				},
				{
					id: 13,
					src: require("../images/gallery/DSC_0511.jpg"),
				},
				{
					id: 14,
					src: require("../images/gallery/DSC_0565.jpg"),
					className: 'v-img'
				},
				{
					id: 15,
					src: require("../images/gallery/DSC_0513.jpg"),
				},
				{
					id: 16,
					src: require("../images/gallery/DSC_0597.jpg"),
					className: 'v-img'
				},
				{
					id: 17,
					src: require("../images/gallery/DSC_0746.jpg"),
					className: 'v-img'
				},
				{
					id: 18,
					src: require("../images/gallery/DSC_0609.jpg"),
				},
				{
					id: 19,
					src: require("../images/gallery/DSC_0646.jpg"),
				},
				{
					id: 20,
					src: require("../images/gallery/DSC_0737.jpg"),
				},
				{
					id: 21,
					src: require("../images/gallery/DSC_0758.jpg"),
					className: 'v-img'
				},
				{
					id: 22,
					src: require("../images/gallery/DSC_0764.jpg"),
					className: 'v-img'
				},
				{
					id: 23,
					src: require("../images/gallery/DSC_0843.jpg"),
					className: 'v-img'
				},
				{
					id: 24,
					src: require("../images/gallery/DSC_0808.jpg"),
				},
				{
					id: 25,
					src: require("../images/gallery/DSC_0882.jpg"),
				},
				{
					id: 26,
					src: require("../images/gallery/DSC_0857.jpg"),
					className: 'v-img'
				},
			]
		}
  	}

	render(){
		const { photoIndex, isOpen } = this.state;

		const imageObjects = this.state.images.map( image =>{
			return(
					<img 
						key={image.id}
						src={image.src} 
						className={image.className} 
						alt="item" 
						onClick={() => this.setState({
							photoIndex:image.id,
							isOpen:true

						})}
					/>
			)
		})

		const imageStrings = this.state.images.map( image =>{
			return(
				image['src']
			)
		})

		return(
			<div className="container-fluid gallery">
				<div className="row justify-content-md-center mt-5">
					<div className="col" align="center">
						<h1 className="name mb-5">Photo Gallery</h1>

						<div className="images mt-2">
							{imageObjects}
						</div>

						{isOpen && (
				          <Lightbox
				            mainSrc={imageStrings[photoIndex]}
				            nextSrc={imageStrings[(photoIndex + 1) % imageStrings.length]}
				            prevSrc={imageStrings[(photoIndex + imageStrings.length - 1) % imageStrings.length]}
				            onCloseRequest={() => this.setState({ isOpen: false })}
				            onMovePrevRequest={() =>
				              this.setState({
				                photoIndex: (photoIndex + imageStrings.length - 1) % imageStrings.length,
				              })
				            }
				            onMoveNextRequest={() =>
				              this.setState({
				                photoIndex: (photoIndex + 1) % imageStrings.length,
				              })
				            }
				          />
				        )}

				        <div className="mt-5">
				        	<span className="amor_ruel_gallery">Ruel&nbsp; <span className="and">&</span> &nbsp;Amor</span>

				        	<hr className="saying_hr" />

				        	<span>
				        		<p className="gallery_saying">"Submit to one another out of Reverence for Christ."</p>
				        		<p style={{fontSize:'10pt'}}>-Ephesians 5:21</p>
				        	</span>

				        	<hr className="saying_hr" />
				        </div>
					</div>
				</div>
			</div>
		);		
	}


}

export default Gallery;