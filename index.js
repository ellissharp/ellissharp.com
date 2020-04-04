const items = Array.from({ length: pages }, (_, i) => {
  i++;
  return {
    src: `${i}.jpg`,
    srct: `${i}.jpg`,
    title: `Chapter ${i}`,
  };
});

jQuery('#nanogallery2').nanogallery2({
  itemsBaseURL: `/comics/${comic}/`,

  thumbnailWidth: 'auto',
  colorScheme: {
    thumbnail: {
      borderColor: 'rgba(255,255,255,1)',
    },
  },
  thumbnailAlignment: 'center',
  displayBreadcrumb: false,
  breadcrumbAutoHideTopLevel: false,
  thumbnailHoverEffect2: 'scale120|labelAppear75',

  items,
});
