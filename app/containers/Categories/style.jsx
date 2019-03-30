// @flow

import styled from 'styled-components';

export default styled.div`
  .container {
    background: #efefef;
    height: calc(100vh - 50px);
    width: 100%;
    overflow: hidden;
    position: relative;
    > .categories-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      right: -17px;
      overflow-y: scroll;
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 0 8px;
    }
  }
`;