 
export default async function Docs({ params, }:
    {params: Promise<{path:string[]}>}
) {
    const { path } = await params;
    if (path?.length == 2) {
        return <h1>This is document name {path[0]} and its index { path[1]}</h1>
        
    } else if (path?.length == 1) {
          return <h1>This is document name {path[0]}</h1>
        
    }
    return <h1>This is default path</h1>;
}