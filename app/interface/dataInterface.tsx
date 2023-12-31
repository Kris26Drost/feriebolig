// Generated by https://quicktype.io

export interface Content {
    initDate:      string;
    id:            number;
    name:          string;
    address:       string;
    zipCode:       string;
    city:          string;
    country:       Country;
    email:         string;
    phone:         string;
    mobile:        string;
    www:           string;
    latitude:      string;
    longitude:     string;
    fileName:      string;
    rootType:      string;
    bookingOnline: string;
    required:      boolean;
    company:       Company;
    texts:         Text[];
    attributes:    Attribute[];
    photos:        Photo[];
    profiles:      Profile[];
}

export interface Attribute {
    id:    number;
    group: Group;
    type:  AttributeType;
    unit:  Unit;
    name:  string;
    value: string;
}

export enum Group {
    Distance = "DISTANCE",
    Facility = "FACILITY",
    Facts = "FACTS",
}

export enum AttributeType {
    Boolean = "BOOLEAN",
    Number = "NUMBER",
}

export enum Unit {
    Antal = "ANTAL",
    Boolean = "BOOLEAN",
    KM = "KM",
    M2 = "M2",
    Year = "YEAR",
}

export interface Company {
    name:       string;
    address:    string;
    city:       string;
    zipCode:    string;
    country:    Country;
    email:      string;
    phone:      string;
    mobile:     string;
    www:        string;
    bookingSMS: boolean;
}

export enum Country {
    De = "DE",
    Dk = "DK",
    No = "NO",
    Uk = "UK",
}

export interface Photo {
    photoID:   number;
    photoUrl:  string;
    photoType: PhotoType;
    texts:     Text[];
}

export enum PhotoType {
    Img1 = "IMG1",
    Img2 = "IMG2",
    Img3 = "IMG3",
    Img4 = "IMG4",
    Img5 = "IMG5",
    Img6 = "IMG6",
    Img7 = "IMG7",
    Img8 = "IMG8",
    Img9 = "IMG9",
}

export interface Text {
    photoId?:  number;
    language:  Country;
    textType?: TextTypeEnum;
    text:      string;
    textId?:   number;
    type?:     TextType;
}

export enum TextTypeEnum {
    ArrivalText = "ARRIVAL_TEXT",
    BookingText = "BOOKING_TEXT",
    DepartureText = "DEPARTURE_TEXT",
    FactsText = "FACTS_TEXT",
    Header = "HEADER",
    SalesText = "SALES_TEXT",
    Text = "TEXT",
}

export enum TextType {
    BookingText = "BOOKING_TEXT",
    MenuText = "MENU_TEXT",
    WebsiteText = "WEBSITE_TEXT",
}

export interface Profile {
    profileId:             number;
    accommodationId:       number;
    created:               string;
    accommodationRootType: AccommodationType;
    accommodationType:     AccommodationType;
    profileName:           string;
    minPersons:            number;
    maxPersons:            number;
    arrivalTime:           string;
    departureTime:         string;
    allotment:             number;
    profileTexts:          Text[];
    profilePhotos:         Photo[];
    profileAttributes:     Attribute[];
}

export enum AccommodationType {
    BedBreakfast = "BED_BREAKFAST",
    Feriebolig = "FERIEBOLIG",
    Ferielejlighed = "FERIELEJLIGHED",
    Hotel = "HOTEL",
    Room = "ROOM",
}