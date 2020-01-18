import { graphql } from 'gatsby';


export const query = graphql`
    fragment MenuItemsData on wordpress__wp_api_menus_menus_itemsItems {
        object_id
        title
        url
    }
`;