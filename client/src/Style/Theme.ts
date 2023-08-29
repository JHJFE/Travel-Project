// 화면 사이즈
const size = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1025px',
};

// 화면 변경 지점
const breakpoints = {
    mobileMax: `screen and (max-width: ${size.mobile})`,
    tabletMax: `screen and (max-width: ${size.tablet})`,
    desktopMin: `screen and (max-width: ${size.desktop})`,
};

// 콘텐츠 넓이 관련
const widthSize = {
    contentMax: '1250px',
};

// 색
const colors = {
    fontColor: '#222f3e', //black계열
    themeColor: '#0abde3', //cyanite
    border: '#747d8c', //gray계열
    bgColor: '#ecf0f1', //clouds
};

// 폰트 크기
const fontSizes = {
    title: '18px',
    subtitle: '16px',
    defalt: '15px',
};

const theme = {
    breakpoints,
    colors,
    fontSizes,
    widthSize,
    size,
};

export default theme;
