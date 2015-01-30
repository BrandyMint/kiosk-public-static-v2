###* @jsx React.DOM ###

window.Designer = React.createClass
  propTypes:
    options: React.PropTypes.array.isRequired

  getDefaultProps: ()->
    options: [
      {"type": "ColorList", "name": "цвет страницы", "props": {"name":"background_color", "colorSet":{'dark': '#000', 'white': '#fff', 'gray': '#eee'}, "value":"white"}}
      {"type": "BgList", "name": "фон страницы", "props": {"name":"background_image", "bgSet":{'pokeball': 'https://s-media-cache-ak0.pinimg.com/originals/56/b8/bd/56b8bdb28de8e41c9acbaa993e16a1eb.jpg', 'bg2': 'https://s-media-cache-ak0.pinimg.com/originals/56/b8/bd/56b8bdb28de8e41c9acbaa993e16a1eb.jpg'}, "value":"pokeball"}}
      {"type": "FontList", "name": "шрифт", "props": {"name":"font_family", "value": "gotham"}}
      {"type": "ValueSlider", "name": "размер шрифта", "props": {"name":"font_size", "step": 1, "range":{"min": 13, "max": 15}, "value": 14 }}
      {"type": "Toggle", "name": "главная страница", "props": {"name":"banner", "label": "большой баннер", "value": true }}
      {"type": "LayoutList", "name": "лейаут страницы", "props": {"name":"layout", "layoutSet":{'one': 'http://cs9514.vk.me/v9514976/2b7d/dV_vHdU34H8.jpg', 'two': 'http://cs9514.vk.me/v9514976/2b7d/dV_vHdU34H8.jpg'}, "value":"one"}}
    ]

  handleChange: (option, newValue)->
    newState = {}
    newState[option.props.name] = newValue
    @setState newState

  _createDesignComponent: (option) ->
    switch option.type
      when 'ColorList'
        designComponent = `<ColorList onChange={this.handleChange.bind(this, option)} name={option.props.name} colorSet={option.props.colorSet} value={option.props.value}/>`
        designVal = 
          'background-color': option.props.colorSet[option.props.value]
        designItem = `<div className="b-design-option__item">
          <div className="b-design-option__item__current-params">
            <span className="b-design-option__item__name">{option.name}</span>
            <div className="b-design-option__item__val">
              <div className="b-design-option__color" style={designVal}></div>
            </div>
          </div>
          <div className="b-design-option__item__available-params">{designComponent}</div>
          </div>`

      when 'LayoutList'
        designComponent = `<LayoutList onChange={this.handleChange.bind(this, option)} name={option.props.name} layoutSet={option.props.layoutSet} value={option.props.value}/>`
        designVal = `<div className="b-design-option__color b-design-option__color_img"><img src="" alt=""/></div>`
        designItem = `<div className="b-design-option__item">
          <div className="b-design-option__item__current-params">
            <span className="b-design-option__item__name">{option.name}</span>
            <div className="b-design-option__item__val">{designVal}</div>
          </div>
          <div className="b-design-option__item__available-params">{designComponent}</div>
          </div>`

      when 'BgList'
        designComponent = `<BgList onChange={this.handleChange.bind(this, option)} name={option.props.name} bgSet={option.props.bgSet} value={option.props.value}/>`
        designVal = `<div className="b-design-option__color b-design-option__color_img"><img src="" alt=""/></div>`
        designItem = `<div className="b-design-option__item">
          <div className="b-design-option__item__current-params">
            <span className="b-design-option__item__name">{option.name}</span>
            <div className="b-design-option__item__val">{designVal}</div>
          </div>
          <div className="b-design-option__item__available-params">{designComponent}</div>
          </div>`
      
      when 'FontList'
        designComponent = `<FontList onChange={this.handleChange.bind(this, option)} name={option.props.name} fontSet={option.props.fontSet} value={option.props.value}/>`
        designItem = `<div className="b-design-option__item">
          <span className="b-design-option__item__name">{option.name}</span>
          <div className="b-design-option__item__val">{designComponent}</div>
          </div>`

      when 'ValueSlider'
        designComponent = `<ValueSlider onChange={this.handleChange.bind(this, option)} name={option.props.name} range={option.props.range} value={option.props.value} step={option.props.step}/>`
        designItem = `<div className="b-design-option__item">
          <span className="b-design-option__item__name">{option.name}</span>
          <div className="b-design-option__item__val">{designComponent}</div>
          </div>`

      when 'Toggle'
        designComponent = `<Toggle onChange={this.handleChange.bind(this, option)} name={option.props.name} value={option.props.value}/>`
        designItem = `<div className="b-design-option__item">
          <span className="b-design-option__item__name">{option.name}</span>
          <div className="b-design-option__item__val">{designComponent}</div>
          </div>`

    return designItem

  render: ->
    designItems = _.map @props.options, (option) =>
      @._createDesignComponent option

    return `<div className="b-design-option">
        <div className="b-design-option__title">Управление дизайном</div>
        <span className="b-design-option__close">Закрыть</span>
        <div className="b-design-option__body">{designItems}</div>
        <button type="button" className="b-design-option__save">Сохранить</button>
      </div>`