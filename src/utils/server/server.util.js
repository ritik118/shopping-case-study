export const fetchBannerData = async () => {
    const bannerData = await fetch(process.env.REACT_APP_API_URL + '/banners').then((res) => res.json()).then((result) => result)
    return bannerData;
}

export const fetchCategoryData = async () => {
    const categoryData = await fetch(process.env.REACT_APP_API_URL + '/categories').then((res) => res.json()).then((result) => result)
    return categoryData;
}