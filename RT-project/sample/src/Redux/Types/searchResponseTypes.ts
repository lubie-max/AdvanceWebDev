


export interface Collection {
    version:  string;
    href:     string;
    items:    Item[];
    metadata?: Metadata | 0;
    links?:    CollectionLink[];
}

export interface Item {
    href:   string;
    data:   Datum[];
    links?: ItemLink[];
}

export interface Datum {
    center:             Center;
    title:              string;
    keywords:           string[];
    nasa_id:            string;
    date_created:       Date;
    media_type:         MediaType;
    description:        string;
    description_508?:   string;
    secondary_creator?: string;
    location?:          string;
    album?:             string[];
    photographer?:      string;
}

export enum Center {
    Arc = "ARC",
    Gsfc = "GSFC",
    Hq = "HQ",
    Jpl = "JPL",
    Jsc = "JSC",
}

export enum MediaType {
    Audio = "audio",
    Image = "image",
    Video = "video",
}

export interface ItemLink {
    href:    string;
    rel:     Rel;
    render?: MediaType;
}

export enum Rel {
    Captions = "captions",
    Preview = "preview",
}

export interface CollectionLink {
    rel:    string;
    prompt: string;
    href:   string;
}

export interface Metadata {
    total_hits: number;
}


// --------------------------------------- Media types

export interface MediaLinks {
   mlinks : string[]
}

//  =------------------------------ popular filter

