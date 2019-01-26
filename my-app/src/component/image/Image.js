import React, {Component, PropTypes} from "react";

export default class Image extends Component {

    render() {

        return (
            <figure>
                <img src={this.props.src} alt={this.props.title} />
                <figcaption>
                    <div>
                        <div>
                            <h3>{this.props.caption}</h3>
                        </div>
                    </div>
                </figcaption>
            </figure>
        );
    }
}
