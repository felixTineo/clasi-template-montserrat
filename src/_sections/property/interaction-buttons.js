import React, { Fragment } from 'react';
import { Col } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import styled from 'styled-components';

const SvgCont = styled.svg`
  fill: #fff;
  margin-left: .5rem;
  ${Button}:hover & {
    fill: #fff;
  }
`

export default ()=> (
  <Fragment>
    <Col xs={12} md={6}>
      <Button primary block style={{ marginBottom: 16 }}>
        Recorrer
        <SvgCont width="26" height="26" fill="none" version="1.1" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="m3.8142 3.8076c2.4333-2.4371 5.7356-3.8068 9.1792-3.8076 5.2556-2.1203e-4 9.9938 3.1652 12.006 8.0205 2.0115 4.8552 0.9007 10.444-2.8149 14.161-3.7133 3.7163-9.3001 4.8282-14.153 2.8167-4.853-2.0116-8.015-6.75-8.0103-12.003v-0.0023c-0.0042406-3.4438 1.3604-6.7481 3.7936-9.185zm14.102 3.0891c-0.2441-0.89201-0.5687-1.7601-0.9696-2.5931-1.0835-2.2151-2.4876-3.4351-3.9531-3.4351-1.4656 0-2.8696 1.22-3.9529 3.4351-0.40095 0.83328-0.72557 1.7011-0.96962 2.5931 1.6208-0.32356 3.2699-0.48407 4.9225-0.47919 1.6528-0.00488 3.3019 0.15563 4.9227 0.47919zm0.7851 6.0969c0.0068 1.7347-0.1772 3.4646-0.5491 5.1587-1.6941 0.3717-3.4241 0.556-5.1587 0.549-1.7344 7e-3 -3.4644-0.1773-5.1585-0.549-0.3719-1.6941-0.55594-3.424-0.54916-5.1587-0.00678-1.7344 0.17726-3.4643 0.54916-5.1584 1.6941-0.3719 3.4241-0.55594 5.1585-0.54915 1.7346-0.00679 3.4646 0.17725 5.1587 0.54915 0.3719 1.6941 0.5559 3.424 0.5491 5.1584zm2.9825-3.9528c-0.8333-0.40095-1.7012-0.72557-2.5932-0.96962 0.3234 1.6208 0.4839 3.27 0.4792 4.9225 0.0047 1.6528-0.1558 3.3018-0.4792 4.9225 0.892-0.2438 1.7599-0.5684 2.5932-0.9694 2.215-1.0834 3.4351-2.4875 3.4351-3.9531 0-1.4655-1.2201-2.8696-3.4351-3.9528zm-8.6903 16.078c-1.4656 0-2.8696-1.22-3.9529-3.4351-0.40095-0.8333-0.72557-1.7013-0.96962-2.5931 1.6208 0.3233 3.2699 0.4838 4.9225 0.479 1.6528 0.0048 3.3019-0.1557 4.9227-0.479-0.2441 0.892-0.5687 1.7598-0.9696 2.5931-1.0835 2.2151-2.4876 3.4351-3.9531 3.4351zm-12.104-12.126v0.0019c0 1.4653 1.2105 2.869 3.4253 3.952 0.82989 0.401 1.6946 0.7256 2.5834 0.9694-0.63842-3.2506-0.63715-6.5947 0.00403-9.845-0.89032 0.24405-1.7567 0.56867-2.588 0.96962-2.2147 1.083-3.4247 2.4864-3.4247 3.952zm3.5307-8.5728c1.5894-1.5972 3.5948-2.7167 5.7885-3.2311-0.72243 0.65687-1.3818 1.5756-1.9478 2.7333-0.49022 1.0224-0.87399 2.0923-1.1454 3.1932-1.1009 0.2714-2.171 0.65518-3.1934 1.1452-1.1575 0.56612-2.0762 1.2253-2.7331 1.9477 0.51439-2.1937 1.6339-4.199 3.2311-5.7882zm-3.2309 11.359c0.51439 2.1936 1.6337 4.199 3.2309 5.7884 1.5892 1.5972 3.5946 2.7165 5.7885 3.2311-0.72264-0.6568-1.3818-1.5756-1.948-2.7332-0.49001-1.0225-0.87378-2.0924-1.1452-3.1932-1.1009-0.2714-2.1708-0.6552-3.1932-1.1454-1.1577-0.5661-2.0764-1.2253-2.7331-1.9477zm20.378 5.7884c-1.5894 1.5972-3.5948 2.7165-5.7885 3.2309 0.7224-0.6566 1.3818-1.5756 1.9477-2.733 0.4903-1.0225 0.874-2.0924 1.1454-3.1932 1.1009-0.2714 2.171-0.6552 3.1932-1.1452 1.1577-0.5661 2.0764-1.2255 2.7333-1.9479-0.5144 2.1936-1.6339 4.199-3.2311 5.7884zm-2.6954-14.452c1.1009 0.2714 2.1708 0.65518 3.1932 1.1452 1.1575 0.56612 2.0762 1.2255 2.7331 1.9479-1.0598-4.4698-4.5496-7.9598-9.0194-9.0196 0.7224 0.65709 1.3818 1.5756 1.948 2.7331 0.49 1.0224 0.8737 2.0925 1.1451 3.1934z" clip-rule="evenodd" fill-rule="evenodd"/>
            <path d="m10.098 12.862c0.2748-0.1289 0.4428-0.4879 0.4428-0.9308 0-0.7458-0.5021-1.0036-1.1804-1.0036-0.94757 0-1.2268 0.5776-1.2268 0.9756 0 0.2355 0.0511 0.314 0.37635 0.314 0.26907 0 0.34794-0.1122 0.34794-0.2803 0-0.2244 0.13464-0.3757 0.49934-0.3757 0.30277 0 0.4936 0.1234 0.4936 0.4934 0 0.4821-0.23556 0.5493-0.51566 0.5493-0.16262 0-0.21881 0.1459-0.21881 0.2861 0 0.1458 0.05725 0.286 0.21987 0.286 0.35876 0 0.61765 0.1177 0.61765 0.5326v0.1064c0 0.4262-0.18044 0.6056-0.60089 0.6056-0.35876 0-0.58351-0.1571-0.58351-0.4092 0-0.1796-0.07888-0.2581-0.37593-0.2581-0.25232 0-0.34773 0.0617-0.34773 0.2861 0 0.4541 0.35918 1.0205 1.2788 1.0205 0.74025 0 1.335-0.342 1.335-1.2449v-0.1064c-2e-4 -0.4652-0.2307-0.7177-0.5615-0.8466z"/>
            <path d="m11.691 13.776v-1.5643c0-0.9361 0.5799-1.2839 1.3424-1.2836 0.8971 0 1.2696 0.5548 1.2696 1.0258 0 0.2298-0.1122 0.3027-0.342 0.3027-0.2019 0-0.3812-0.0559-0.3812-0.2748 0-0.2633-0.2636-0.4147-0.5719-0.4147-0.3812 0-0.6113 0.2019-0.6113 0.6446v0.6113c0.1629-0.2188 0.451-0.2861 0.7426-0.2861 0.6335 0 1.1572 0.2748 1.1572 1.1607v0.0784c0 0.9364-0.5597 1.2839-1.2997 1.2839-0.7402 0-1.3057-0.3475-1.3057-1.2839zm1.3027-0.6672c-0.3532 0-0.5971 0.1626-0.5971 0.5888v0.1232c0 0.4429 0.2326 0.6448 0.6026 0.6448 0.3647 0 0.5916-0.2019 0.5916-0.6448v-0.0727c0-0.4657-0.2269-0.6393-0.5971-0.6393z" clip-rule="evenodd" fill-rule="evenodd"/>
            <path d="m17.934 13.776c0 0.9366-0.5653 1.2839-1.3055 1.2839-0.74 0-1.3-0.3476-1.3-1.2839v-1.5643c0-0.9362 0.56-1.2839 1.3-1.2839 0.7402 0 1.3055 0.3477 1.3055 1.2839v1.5643zm-1.3055-2.2089c-0.37 0-0.5943 0.2018-0.5943 0.6446v1.5643c0 0.4429 0.2243 0.6448 0.5943 0.6448 0.3645 0 0.5998-0.2019 0.5998-0.6448v-1.5643c0-0.4428-0.2353-0.6446-0.5998-0.6446z" clip-rule="evenodd" fill-rule="evenodd"/>
          </g>                
        </SvgCont>
      </Button>
    </Col>
    <Col xs={12} md={6}>
      <Button primary block style={{ marginBottom: 16 }}>
        Ver video
        <SvgCont width="27" height="26" version="1.1" viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg">
          <path d="m14.814 9.4332 3.7985 2.195s0.8906 0.5748 0.8906 1.4371c0 0.1046 0 0.2091-0.0261 0.2875-0.1048 0.3919-0.3406 0.7316-0.7074 0.9407l-3.8508 2.2211-0.0262 0.0261h-0.0262l-3.7199 2.1427c-0.131 0.0784-0.6287 0.2875-0.8645 0.2875-0.41915 0-0.7859-0.1568-1.0741-0.4442-0.26197-0.2614-0.44534-0.6533-0.44534-1.0714v-8.989c0.01228-0.049 0.0188-0.09801 0.02497-0.14433 0.00698-0.05246 0.0135-0.10147 0.02742-0.1431 0.01568-0.03912 0.02902-0.07824 0.04212-0.11665 0.03065-0.0899 0.06-0.17595 0.11506-0.24918 0.20957-0.36583 0.55012-0.60101 0.91687-0.70553 0.36676-0.10452 0.78586-0.05226 1.1527 0.15678l3.7723 2.1688zm-0.5239 5.9316 3.7984-2.1949c0.0524-0.0262 0.131-0.1307 0.131-0.2352 0-0.0784-0.1048-0.1568-0.1572-0.1829l-3.7984-2.195h-0.0262s-0.0262 0-0.0524-0.0261l-3.7199-2.1427c-0.0131-0.01306-0.0262-0.0196-0.0393-0.02613s-0.0262-0.01306-0.0393-0.02613h-0.131c-0.0131 0.01307-0.0328 0.02613-0.0524 0.0392-0.0196 0.01306-0.0393 0.02613-0.0524 0.03919 0 0.02613-0.0262 0.05226-0.0262 0.05226-0.0262 0-0.0262 0.02613-0.0262 0.02613v8.9105c0 0.0523 0.0262 0.1307 0.0524 0.1568 0.0524 0.0262 0.1048 0.0523 0.1572 0.0523s0.1834-0.0523 0.2096-0.0784l3.7199-2.1427s0.0262-0.0262 0.0524-0.0262z" clip-rule="evenodd" fill-rule="evenodd"/>
          <path d="m13.032 0c3.327 0 6.6539 1.2804 9.1688 3.8151 2.5411 2.5347 3.7985 5.8533 3.7985 9.1718 0 3.3186-1.2574 6.6372-3.7985 9.1719-2.541 2.5347-5.868 3.7889-9.195 3.7889-3.3269 0-6.6539-1.2542-9.1949-3.7889-2.541-2.5347-3.7985-5.8533-3.7985-9.1719 0-3.3186 1.2836-6.6372 3.8247-9.198 2.5411-2.5347 5.868-3.7889 9.1949-3.7889zm0 24.641c2.9864 0 5.9728-1.1497 8.2519-3.4231 2.3053-2.2734 3.4318-5.2523 3.4318-8.2312s-1.1527-5.9578-3.4318-8.2311-5.2655-3.4231-8.2519-3.4231-5.9728 1.1498-8.2518 3.4231c-2.2791 2.2734-3.4317 5.2522-3.4317 8.2311s1.1264 5.9578 3.4317 8.2312c2.2791 2.2734 5.2654 3.4231 8.2518 3.4231z" clip-rule="evenodd" fill-rule="evenodd"/>
        </SvgCont>
      </Button>
    </Col>     
  </Fragment>  
)