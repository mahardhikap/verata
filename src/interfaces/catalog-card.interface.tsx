export interface CardProps {
  id?: number;
  item_name?: string;
  item_disc?: number;
  item_desc?: string;
  item_price?: number;
  item_photo?: string[];
  setOpenPopup?: React.Dispatch<React.SetStateAction<boolean>>;
  openPopup?:boolean
  onClick?: () => void;
}
