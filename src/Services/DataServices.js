async function FetchOne(url){

    const res = await fetch(url)
    const data = await res.text();
    return data;
}

export { FetchOne }