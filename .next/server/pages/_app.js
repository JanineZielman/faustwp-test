(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8989:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Container_component__V9ZBu"
};


/***/ }),

/***/ 7913:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 4332:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 2810:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Footer_component__PB4Nz",
	"copyright": "Footer_copyright__lw16R"
};


/***/ }),

/***/ 5631:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 7519:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 7032:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Main_component__I_485"
};


/***/ }),

/***/ 3152:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 7259:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 7633:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "Post_component__oqZDb",
	"title": "Post_title__xIbPi",
	"postInfo": "Post_postInfo__lHITl",
	"featuredImage": "Post_featuredImage__P4UYh"
};


/***/ }),

/***/ 7018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@faustwp/core"
var core_ = __webpack_require__(3895);
;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./fragments/GeneralSettings.js

const BlogInfoFragment = client_namespaceObject.gql`
  fragment BlogInfoFragment on GeneralSettings {
    title
    description
  }
`;

// EXTERNAL MODULE: ./components/Container/Container.module.scss
var Container_module = __webpack_require__(8989);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
;// CONCATENATED MODULE: ./components/Container/Container.js


function Container({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Container_module_default()).component,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/Container/index.js


;// CONCATENATED MODULE: external "classnames/bind"
const bind_namespaceObject = require("classnames/bind");
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_namespaceObject);
// EXTERNAL MODULE: ./components/ContentWrapper/ContentWrapper.module.scss
var ContentWrapper_module = __webpack_require__(7913);
var ContentWrapper_module_default = /*#__PURE__*/__webpack_require__.n(ContentWrapper_module);
;// CONCATENATED MODULE: ./components/ContentWrapper/ContentWrapper.js



let cx = bind_default().bind((ContentWrapper_module_default()));
function ContentWrapper({ content , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: cx("component"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: content ?? ""
                }
            }),
            children
        ]
    });
}

;// CONCATENATED MODULE: ./components/ContentWrapper/index.js


// EXTERNAL MODULE: ./components/EntryHeader/EntryHeader.module.scss
var EntryHeader_module = __webpack_require__(4332);
var EntryHeader_module_default = /*#__PURE__*/__webpack_require__.n(EntryHeader_module);
;// CONCATENATED MODULE: ./components/EntryHeader/EntryHeader.js




let EntryHeader_cx = bind_default().bind((EntryHeader_module_default()));
function EntryHeader({ title , image , date , author , className  }) {
    const hasText = title || date || author;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: EntryHeader_cx([
            "component",
            className
        ]),
        children: [
            image && /*#__PURE__*/ jsx_runtime_.jsx(FeaturedImage, {
                image: image,
                className: EntryHeader_cx("image"),
                priority: true
            }),
            hasText && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: EntryHeader_cx("text", {
                    "has-image": image
                }),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                    children: [
                        !!title && /*#__PURE__*/ jsx_runtime_.jsx(Heading_Heading, {
                            className: EntryHeader_cx("title"),
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PostInfo, {
                            className: EntryHeader_cx("byline"),
                            author: author,
                            date: date
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/EntryHeader/index.js


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/FeaturedImage/FeaturedImage.js



function FeaturedImage({ image , width , height , className , priority , layout , ...props }) {
    const src = image?.sourceUrl;
    const { altText  } = image || "";
    width = width ? width : image?.mediaDetails?.width;
    height = height ? height : image?.mediaDetails?.height;
    layout = layout ?? "fill";
    return src && width && height ? /*#__PURE__*/ jsx_runtime_.jsx("figure", {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: src,
            alt: altText,
            layout: layout,
            width: width,
            height: height,
            priority: priority,
            ...props
        })
    }) : null;
}
FeaturedImage.fragments = {
    entry: client_namespaceObject.gql`
    fragment FeaturedImageFragment on NodeWithFeaturedImage {
      featuredImage {
        node {
          id
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  `
};

;// CONCATENATED MODULE: ./components/FeaturedImage/index.js


// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(2810);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/Footer.js




let Footer_cx = bind_default().bind((Footer_module_default()));
function Footer({ title , menuItems  }) {
    const year = new Date().getFullYear();
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: Footer_cx("component"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NavigationMenu, {
                    menuItems: menuItems
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: Footer_cx("copyright"),
                    children: `${title} © ${year}. Powered by WordPress.`
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer/index.js


;// CONCATENATED MODULE: ./components/FormatDate/FormatDate.js

function FormatDate({ date  }) {
    let formattedDate = new Date(date);
    if (isNaN(formattedDate.valueOf())) {
        return null;
    }
    const timeformat = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour12: false
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: formattedDate.toLocaleDateString("en-US", timeformat)
    });
}

;// CONCATENATED MODULE: ./components/FormatDate/index.js


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__(5631);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header/Header.js






let Header_cx = bind_default().bind((Header_module_default()));
function Header({ title , description , menuItems  }) {
    const { 0: isNavShown , 1: setIsNavShown  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: Header_cx("component"),
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "background-animation",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-blob1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-blob2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-blob3"
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Header/index.js


;// CONCATENATED MODULE: ./components/Heading/Heading.js


function Heading_Heading({ level ="h1" , children , className  }) {
    const Tag = ({ ...props })=>/*#__PURE__*/ external_react_default().createElement(level, props, children);
    return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
        className: className,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/Heading/index.js


;// CONCATENATED MODULE: ./constants/selectors.js
const MAIN_CONTENT_ID = "main-content";

// EXTERNAL MODULE: ./components/Main/Main.module.scss
var Main_module = __webpack_require__(7032);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
;// CONCATENATED MODULE: ./components/Main/Main.js




let Main_cx = bind_default().bind((Main_module_default()));
function Main({ children , className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        id: MAIN_CONTENT_ID,
        tabIndex: -1,
        className: Main_cx([
            "component",
            className
        ]),
        ...props,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/Main/index.js


// EXTERNAL MODULE: ./components/NavigationMenu/NavigationMenu.module.scss
var NavigationMenu_module = __webpack_require__(3152);
var NavigationMenu_module_default = /*#__PURE__*/__webpack_require__.n(NavigationMenu_module);
// EXTERNAL MODULE: ./components/NavigationMenu/NavigationMenuClassesFromWP.module.scss
var NavigationMenuClassesFromWP_module = __webpack_require__(7259);
var NavigationMenuClassesFromWP_module_default = /*#__PURE__*/__webpack_require__.n(NavigationMenuClassesFromWP_module);
;// CONCATENATED MODULE: ./components/NavigationMenu/NavigationMenu.js







let NavigationMenu_cx = bind_default().bind((NavigationMenu_module_default()));
let cxFromWp = bind_default().bind((NavigationMenuClassesFromWP_module_default()));
function NavigationMenu({ menuItems , className  }) {
    if (!menuItems) {
        return null;
    }
    // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data
    // const hierarchicalMenuItems = flatListToHierarchical(menuItems);
    function renderMenu(items) {
        return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: NavigationMenu_cx("menu"),
            children: items.map((item)=>{
                const { id , path , label , children , cssClasses  } = item;
                // @TODO - Remove guard clause after ghost menu items are no longer appended to array.
                if (!item.hasOwnProperty("__typename")) {
                    return null;
                }
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: cxFromWp(cssClasses),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: path ?? "",
                            children: label ?? ""
                        }),
                        children.length ? renderMenu(children) : null
                    ]
                }, id);
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: NavigationMenu_cx([
            "component",
            className
        ]),
        role: "navigation",
        "aria-label": `${menuItems[0]?.menu?.node?.name} menu`
    });
}
NavigationMenu.fragments = {
    entry: client_namespaceObject.gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `
};

;// CONCATENATED MODULE: ./components/NavigationMenu/index.js


;// CONCATENATED MODULE: ./components/PostInfo/PostInfo.js


function PostInfo({ date , author , className  }) {
    if (!date && !author) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            date && /*#__PURE__*/ jsx_runtime_.jsx("time", {
                dateTime: date,
                children: /*#__PURE__*/ jsx_runtime_.jsx(FormatDate, {
                    date: date
                })
            }),
            date && author && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "\xa0"
            }),
            author && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "by ",
                    author
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/PostInfo/index.js


// EXTERNAL MODULE: ./components/Hero/Hero.module.scss
var Hero_module = __webpack_require__(7519);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./components/Hero/Hero.js





let Hero_cx = bind_default().bind((Hero_module_default()));
function Hero({ title , level ="h2" , children , className  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: Hero_cx([
            "component",
            className
        ]),
        children: [
            /*#__PURE__*/ _jsx(Heading, {
                level: level,
                children: /*#__PURE__*/ _jsx("span", {
                    className: Hero_cx("title"),
                    children: title
                })
            }),
            children
        ]
    });
}

;// CONCATENATED MODULE: ./components/Hero/index.js


// EXTERNAL MODULE: ./components/Post/Post.module.scss
var Post_module = __webpack_require__(7633);
var Post_module_default = /*#__PURE__*/__webpack_require__.n(Post_module);
;// CONCATENATED MODULE: ./components/Post/Post.js





function Post({ title , content , date , author , uri , featuredImage ,  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: (Post_module_default()).component,
        children: [
            featuredImage && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: uri,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(FeaturedImage, {
                        image: featuredImage,
                        layout: "responsive",
                        className: (Post_module_default()).featuredImage
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: uri,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostInfo, {
                date: date,
                author: author,
                className: (Post_module_default()).postInfo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Post_module_default()).content,
                dangerouslySetInnerHTML: {
                    __html: content
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Post/index.js


;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO/SEO.js


/**
 * Provide SEO related meta tags to a page.
 *
 * @param {Props} props The props object.
 * @param {string} props.title Used for the page title, og:title, twitter:title, etc.
 * @param {string} props.description Used for the meta description, og:description, twitter:description, etc.
 * @param {string} props.imageUrl Used for the og:image and twitter:image. NOTE: Must be an absolute url.
 * @param {string} props.url Used for the og:url and twitter:url.
 *
 * @returns {React.ReactElement} The SEO component
 */ function SEO({ title , description , imageUrl , url  }) {
    if (!title && !description && !imageUrl && !url) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:type",
                    content: "website"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }),
                title && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "title",
                            content: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:title",
                            content: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "twitter:title",
                            content: title
                        })
                    ]
                }),
                description && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:description",
                            content: description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "twitter:description",
                            content: description
                        })
                    ]
                }),
                imageUrl && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image",
                            content: imageUrl
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "twitter:image",
                            content: imageUrl
                        })
                    ]
                }),
                url && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:url",
                            content: url
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "twitter:url",
                            content: url
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/SEO/index.js


;// CONCATENATED MODULE: ./components/PostsGrid/PostsGrid.js



function Posts({ posts , id  }) {
    const colors = [
        "blue",
        "yellow",
        "pink"
    ];
    const { 0: amount , 1: setAmount  } = (0,external_react_.useState)(5);
    (0,external_react_.useEffect)(()=>{
        function handleResize() {
            if (window.innerWidth > 900) {
                setAmount(3);
            }
            if (window.innerWidth < 900) {
                setAmount(2);
            }
        }
        window.addEventListener("resize", handleResize);
    });
    return(// eslint-disable-next-line react/jsx-props-no-spreading
    /*#__PURE__*/ jsx_runtime_.jsx("section", {
        ...id && {
            id
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: posts.map((post, i)=>{
                        console.log(post);
                        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: i % amount == 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "post-item",
                                id: `post-${post.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/posts/${post.slug}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "category",
                                                children: post.categories.nodes[0].name
                                            }),
                                            post.featuredImage ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: post.featuredImage?.node.mediaItemUrl
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `placeholder placeholder-${Math.floor(Math.random() * 5)}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob1 ${colors[Math.floor(Math.random() * 3)]}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob2 ${colors[Math.floor(Math.random() * 3)]}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob3 ${colors[Math.floor(Math.random() * 3)]}`
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "title",
                                                children: post.title
                                            })
                                        ]
                                    })
                                })
                            }, post.id ?? "")
                        });
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: posts.map((post, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: i % amount == 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "post-item",
                                id: `post-${post.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/posts/${post.slug}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "category",
                                                children: post.categories.nodes[0].name
                                            }),
                                            post.featuredImage ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: post.featuredImage?.node.mediaItemUrl
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `placeholder placeholder-${Math.floor(Math.random() * 5)}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob1 ${colors[Math.floor(Math.random() * 3)]}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob2 ${colors[Math.floor(Math.random() * 3)]}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob3 ${colors[Math.floor(Math.random() * 3)]}`
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "title",
                                                children: post.title
                                            })
                                        ]
                                    })
                                })
                            }, post.id ?? "")
                        });
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: posts.map((post, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: i % amount == 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "post-item",
                                id: `post-${post.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/posts/${post.slug}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "category",
                                                children: post.categories.nodes[0].name
                                            }),
                                            post.featuredImage ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: post.featuredImage?.node.mediaItemUrl
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `placeholder placeholder-${Math.floor(Math.random() * 5)}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob1 ${colors[Math.floor(Math.random() * 3)]}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob2 ${colors[Math.floor(Math.random() * 3)]}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `blob blob3 ${colors[Math.floor(Math.random() * 3)]}`
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "title",
                                                children: post.title
                                            })
                                        ]
                                    })
                                })
                            }, post.id ?? "")
                        });
                    })
                }),
                posts && posts?.length < 1 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "No posts found."
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./components/PostsGrid/index.js


;// CONCATENATED MODULE: ./components/index.js
















;// CONCATENATED MODULE: ./wp-templates/category.js





function Component(props) {
    const { title: siteTitle , description: siteDescription  } = props?.data?.generalSettings;
    const { name , posts  } = props.data.nodeByUri;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO, {
                title: siteTitle,
                description: siteDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                title: siteTitle,
                description: siteDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(EntryHeader, {
                            title: `Category: ${name}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                            children: posts.edges.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(Post, {
                                    title: post.node.title,
                                    content: post.node.content,
                                    date: post.node.date,
                                    author: post.node.author?.node.name,
                                    uri: post.node.uri,
                                    featuredImage: post.node.featuredImage?.node
                                }))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                title: siteTitle,
                menuItems: footerMenu
            })
        ]
    });
}
Component.query = client_namespaceObject.gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetCategoryPage(
    $uri: String!
  ) {
    nodeByUri(uri: $uri) {
      ... on Category {
        name
        posts {
          edges {
            node {
              id
              title
              content
              date
              uri
              ...FeaturedImageFragment
              author {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;
Component.variables = ({ uri  })=>{
    return {
        uri
    };
};

;// CONCATENATED MODULE: ./wp-templates/tag.js





function tag_Component(props) {
    const { title: siteTitle , description: siteDescription  } = props?.data?.generalSettings;
    const { name , posts  } = props.data.nodeByUri;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO, {
                title: siteTitle,
                description: siteDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                title: siteTitle,
                description: siteDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(EntryHeader, {
                            title: `Tag: ${name}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                            children: posts.edges.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(Post, {
                                    title: post.node.title,
                                    content: post.node.content,
                                    date: post.node.date,
                                    author: post.node.author?.node.name,
                                    uri: post.node.uri,
                                    featuredImage: post.node.featuredImage?.node
                                }))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                title: siteTitle,
                menuItems: footerMenu
            })
        ]
    });
}
tag_Component.query = client_namespaceObject.gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetTagPage(
    $uri: String!
  ) {
    nodeByUri(uri: $uri) {
      ... on Tag {
        name
        posts {
          edges {
            node {
              id
              title
              content
              date
              uri
              ...FeaturedImageFragment
              author {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;
tag_Component.variables = ({ uri  })=>{
    return {
        uri
    };
};

;// CONCATENATED MODULE: ./wp-templates/front-page.js






function front_page_Component() {
    const { data  } = (0,client_namespaceObject.useQuery)(front_page_Component.query);
    const { title: siteTitle , description: siteDescription  } = data?.generalSettings;
    // const primaryMenu = data?.headerMenuItems?.nodes ?? [];
    // const footerMenu = data?.footerMenuItems?.nodes ?? [];
    const posts = data?.posts?.nodes ?? [];
    console.log(posts);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO, {
                title: siteTitle,
                description: siteDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                title: siteTitle,
                description: siteDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo-container",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/",
                                                className: "logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "apria_logo",
                                                    width: "100%",
                                                    height: "100%",
                                                    viewBox: "0 0 100 100",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "50%",
                                                        cy: "50%",
                                                        r: "50"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "title",
                                            children: "APRIA: ArtEZ Platform for Research Interventions of the Arts is an online platform that curates a peer-reviewed journal (APRIA journal) and publishes high-impact essays, image and sound contributions that examine art and interventions of the arts in relation to science and society, and that encourage dialogue around themes that are critical and urgent to the futures that we will live in."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "post-highlight-item column2",
                                    id: `post-${posts[0].id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/posts/${posts[0].slug}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "category",
                                                    children: posts[0].categories.nodes[0].name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: posts[0].featuredImage?.node.mediaItemUrl
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "title",
                                                    children: posts[0].title
                                                })
                                            ]
                                        })
                                    })
                                }, posts[0].id ?? "")
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Posts, {
                            posts: posts
                        })
                    ]
                })
            })
        ]
    });
}
front_page_Component.query = client_namespaceObject.gql`
  ${BlogInfoFragment}
  query GetPageData {
    generalSettings {
      ...BlogInfoFragment
    }
    posts(first: 100)  {
      nodes {
        id
        title
        slug
        featuredImage{
          node{
            mediaItemUrl
          }
        }
        categories{
          nodes{
            name
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./constants/menus.js
const PRIMARY_LOCATION = "PRIMARY";
const FOOTER_LOCATION = "FOOTER";

;// CONCATENATED MODULE: ./wp-templates/page.js





function page_Component(props) {
    // Loading state for previews
    if (props.loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "Loading..."
        });
    }
    const { title: siteTitle , description: siteDescription  } = props?.data?.generalSettings;
    const { title , content , featuredImage  } = props?.data?.page ?? {
        title: ""
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO, {
                title: siteTitle,
                description: siteDescription,
                imageUrl: featuredImage?.node?.sourceUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                title: siteTitle,
                description: siteDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(EntryHeader, {
                            title: title,
                            image: featuredImage?.node
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ContentWrapper, {
                                content: content
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                title: siteTitle,
                menuItems: footerMenu
            })
        ]
    });
}
page_Component.variables = ({ databaseId  }, ctx)=>{
    return {
        databaseId,
        headerLocation: PRIMARY_LOCATION,
        footerLocation: FOOTER_LOCATION,
        asPreview: ctx?.asPreview
    };
};
page_Component.query = client_namespaceObject.gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ...FeaturedImageFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;

;// CONCATENATED MODULE: ./wp-templates/single.js





function single_Component(props) {
    // Loading state for previews
    if (props.loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "Loading..."
        });
    }
    const { title: siteTitle , description: siteDescription  } = props?.data?.generalSettings;
    const { title , content , featuredImage , date , author  } = props.data.post;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO, {
                title: siteTitle,
                description: siteDescription,
                imageUrl: featuredImage?.node?.sourceUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                title: siteTitle,
                description: siteDescription
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "article",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "info-bar",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "date",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "field",
                                        children: "DATE"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "data",
                                        children: date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "date",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "field",
                                        children: "Published in"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "data",
                                        children: date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "date",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "field",
                                        children: "DOI"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "data",
                                        children: date
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "headline",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrap",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: content ?? ""
                            }
                        })
                    })
                ]
            })
        ]
    });
}
single_Component.query = client_namespaceObject.gql`
  ${BlogInfoFragment}
  ${FeaturedImage.fragments.entry}
  query GetPost(
    $databaseId: ID!
    $asPreview: Boolean = false
  ) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      ...FeaturedImageFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`;
single_Component.variables = ({ databaseId  }, ctx)=>{
    return {
        databaseId,
        asPreview: ctx?.asPreview
    };
};

;// CONCATENATED MODULE: ./wp-templates/index.js





/* harmony default export */ const wp_templates = ({
    category: Component,
    tag: tag_Component,
    "front-page": front_page_Component,
    page: page_Component,
    single: single_Component
});

;// CONCATENATED MODULE: ./possibleTypes.json
const possibleTypes_namespaceObject = JSON.parse('{"Node":["Category","EnqueuedScript","EnqueuedStylesheet","ContentType","Taxonomy","User","Comment","MediaItem","Page","Post","PostFormat","Tag","Project","UserRole","Testimonial","Menu","MenuItem","Plugin","Theme","CommentAuthor"],"TermNode":["Category","PostFormat","Tag"],"UniformResourceIdentifiable":["Category","ContentType","User","MediaItem","Page","Post","PostFormat","Tag","Project","Testimonial"],"EnqueuedAsset":["EnqueuedScript","EnqueuedStylesheet"],"DatabaseIdentifier":["Category","User","Comment","MediaItem","Page","Post","PostFormat","Tag","Project","Testimonial","Menu","MenuItem"],"HierarchicalTermNode":["Category"],"MenuItemLinkable":["Category","Page","Post","Tag"],"ContentNode":["MediaItem","Page","Post","Project","Testimonial"],"Commenter":["User","CommentAuthor"],"NodeWithTemplate":["MediaItem","Page","Post","Project","Testimonial"],"ContentTemplate":["DefaultTemplate","Template_FullWidth"],"NodeWithTitle":["MediaItem","Page","Post","Project","Testimonial"],"NodeWithAuthor":["MediaItem","Page","Post","Project","Testimonial"],"NodeWithComments":["MediaItem","Page","Post"],"HierarchicalContentNode":["MediaItem","Page"],"NodeWithContentEditor":["Page","Post"],"NodeWithFeaturedImage":["Page","Post","Project"],"NodeWithExcerpt":["Page","Post"],"NodeWithRevisions":["Page","Post"],"NodeWithPageAttributes":["Page"],"NodeWithTrackbacks":["Post"],"ContentRevisionUnion":["Post","Page"],"MenuItemObjectUnion":["Post","Page","Category","Tag"]}');
;// CONCATENATED MODULE: ./faust.config.js



/**
 * @type {import('@faustwp/core').FaustConfig}
 **/ /* harmony default export */ const faust_config = ((0,core_.setConfig)({
    templates: wp_templates,
    experimentalPlugins: [],
    experimentalToolbar: true,
    possibleTypes: possibleTypes_namespaceObject
}));

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/_app.js








function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.FaustProvider, {
        pageProps: pageProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "planck.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "d3.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "balancetext.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://use.typekit.net/iiw5mea.css"
                    })
                ]
            }),
            /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                ...pageProps,
                key: router.asPath
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "java.js"
            })
        ]
    });
}


/***/ }),

/***/ 3895:
/***/ ((module) => {

"use strict";
module.exports = require("@faustwp/core");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61], () => (__webpack_exec__(7018)));
module.exports = __webpack_exports__;

})();