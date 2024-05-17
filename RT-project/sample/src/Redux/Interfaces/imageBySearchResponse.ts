
interface Keyword {
    [index: number]: string;
  }
interface DataItem {
    center: string;
    date_created: string;
    description: string;
    keywords: Keyword;
    media_type: string;
    nasa_id: string;
    title: string;
    href: string;
    links: Link[];
  }

interface Data{
 [index:number]: DataItem
}
interface Item {
    href: string,
    data : Data

}

interface Link {
    href: string;
    rel: string;
    render: string;
  }

export interface Collection{
    href : string,
    items : Item[] | null,
    links : Link[] | null,
    version: string,
}

const initialState: Collection = {
     href: "",
     items: [],
     links: [],
     version: ""
}

