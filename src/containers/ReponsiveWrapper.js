import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { windowResize } from '../actions/responsiveActions';

export default (ChartComponent) => {
  class ResponsiveChart extends Component {
    constructor(props) {
      super(props);
      this.fitParentContainer = this.fitParentContainer.bind(this);
    }

    componentDidMount() {
      this.fitParentContainer()
      window.addEventListener('resize', this.fitParentContainer);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.fitParentContainer);
    }

    fitParentContainer() {
      const currentContainerWidth = this.chartContainer.getBoundingClientRect().width;
      const shouldResize = this.props.containerWidth !== currentContainerWidth;

      if (shouldResize) {
        this.props.windowResize(currentContainerWidth);
      }
    }

    renderChart() {
      const parentWidth = this.props.containerWidth

      return (
        <ChartComponent {...this.props} parentWidth={parentWidth} />
      )
    }

    render() {
      // const { containerWidth } = this.props
      const shouldRenderChart = this.props.containerWidth !== null

      return (
        <div
          ref={(el) => { this.chartContainer = el }}
          className="Responsive-wrapper"
        >
          {shouldRenderChart && this.renderChart()}
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      containerWidth: state.responsive.containerWidth
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      windowResize: windowResize
    }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(ResponsiveChart)
}
