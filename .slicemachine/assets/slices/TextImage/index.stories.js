import MyComponent from '../../../../slices/TextImage';

export default {
  title: 'slices/TextImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"heading1","text":"Morph extensible channels","spans":[]}],"description":[{"type":"paragraph","text":"Commodo mollit laboris pariatur ipsum.","spans":[]}],"mainImage":{"dimensions":{"width":600,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=600&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _ImageLeft = () => <MyComponent slice={{"variation":"imageLeft","name":"Image Left","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"heading1","text":"Monetize customized experiences","spans":[]}],"description":[{"type":"paragraph","text":"Laborum aliquip nostrud eiusmod magna consectetur ullamco occaecat Lorem reprehenderit. Eiusmod irure consectetur non eiusmod dolore labore ad aliquip cillum.","spans":[]}],"mainImage":{"dimensions":{"width":600,"height":600},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=600&fit=crop"}},"id":"_ImageLeft"}} />
_ImageLeft.storyName = 'Image Left'
