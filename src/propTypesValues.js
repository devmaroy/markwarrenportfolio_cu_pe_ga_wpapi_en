import PropTypes from 'prop-types';


// Single Post
export const singlePostPropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
};


// Preview Post
export const previewPostPropTypes = {
    wordpress_id: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
}


// Sidebar Preview Post
export const sidebarPreviewPostPropTypes = {
    wordpress_id: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fixed: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
}


// Taxonomy
export const taxonomyPropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}


// Featured Media Fluid
export const featuredMediaFluidPropTypes = {
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
}


// Featured Media Fixed
export const featuredMediaFixedPropTypes = {
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fixed: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
}


// Menu
export const menuPropTypes = {
    allWordpressWpApiMenusMenusItems: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
            node: PropTypes.shape({
                items: PropTypes.arrayOf(PropTypes.shape({
                    object_id: PropTypes.number.isRequired,
                    title: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired,
                })).isRequired,
            }).isRequired,
        })).isRequired,
    }).isRequired,
}


// Template Post
export const templatePostPropTypes = {
    wordpress_id: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,                    
    slug: PropTypes.string.isRequired,                    
    date: PropTypes.string.isRequired,                    
    excerpt: PropTypes.string.isRequired,   
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired, 
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired       
}


// Template Pagination
export const templatePaginationPropTypes = {
    id: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
}