###* @jsx React.DOM ###

window.BasketPopup = React.createClass
  propTypes:
    cartUrl: React.PropTypes.string.isRequired
    cartClearUrl: React.PropTypes.string
    items: React.PropTypes.array

  getInitialState: ->
    isVisible: false
    items: null

  handleClick: (e)->
    $(document).trigger "cart:clicked"

  handleBodyClick: ()->
    @setState isVisible: false if @state.isVisible

  handleBodyKey: (e)->
    @setState isVisible: false if e.keyCode == 27

  componentDidMount: ()->
    $(document).on "click", @handleBodyClick
    $(document).on "cart:clicked", @handleCartClicked
    $(document).on "keyup", @handleBodyKey
    BasketStore.addChangeListener @_onChange

  componentWillUnmount: ()->
    $(document).off "click", @handleBodyClick
    $(document).off "cart:clicked", @handleCartClicked
    $(document).off "keyup", @handleBodyKey

  _onChange: ()->
    @setState items: BasketStore.getBasketItems()
    @handleCartClicked()

  handleCartClicked: (e)->
    @setState isVisible: true

  getDefaultProps: ->
    cartUrl: "/cart.html"
    cartClearUrl: "/cart.html?clear"
    items: null

  render: ->
    classNameValue = "b-float-cart"
    classNameValue += " b-float-cart_invisible" if @state.isVisible is false
    return `<div className={classNameValue}><div className='b-float-cart__content' onClick={this.handleClick}>
          <BasketPopupList items={this.state.items}/>
          <BasketPopupControl cartUrl={this.props.cartUrl} cartClearUrl={this.props.cartClearUrl}/>
        </div></div>`

window.BasketPopupList = React.createClass
  propTypes:
    items: React.PropTypes.array    

  render: ->
    return null unless @props.items
    itemsList = @props.items.map((item) ->
      return (
        `<BasketPopupItem key={item.order_product_id} item={item}/>`
        )
    )
    
    return `<div className="b-float-cart__item-wrap">
        {itemsList}
      </div>`

window.BasketPopupItem = React.createClass
  propTypes:
    order_product_id: React.PropTypes.number
    product_id: React.PropTypes.number
    price: React.PropTypes.number
    count: React.PropTypes.number
    image_url: React.PropTypes.string
    title: React.PropTypes.string
    description: React.PropTypes.string
    article: React.PropTypes.string
    product: React.PropTypes.object.isRequired

  render: ->
    @props = @props.item
    return `<div className="b-float-cart__item">
              <div className="b-float-cart__item__inner">
                <div className="b-float-cart__item__img">
                  <a href={this.props.product_id}>
                    <img src={this.props.product.image.url} alt={this.props.title}/>
                  </a>
                </div>
                <div className="b-float-cart__item__info">
                  <a className="b-float-cart__item__name" href={this.props.product_id}>{this.props.product.title}</a>
                  <div className="b-float-cart__item__param">{this.props.description}</div>
                  <div className="b-float-cart__item__param">{this.props.article}</div>
                </div>
                <div className="b-float-cart__item__q">{this.props.count}</div>
                <div className="b-float-cart__item__price">
                  <div className="b-float-cart__item__price-val">
                    {accounting.formatMoney(this.props.product.price.cents * this.props.count)}
                  </div>
                </div>
              </div>
            </div>`


window.BasketPopupControl = React.createClass
  propTypes:
    cartUrl: React.PropTypes.string.isRequired
    cartClearUrl: React.PropTypes.string

  render: ->
    return `<div className="b-float-cart__control">
          <a className="b-float-cart__url b-btn" href={this.props.cartUrl}>Перейти в корзину</a>
          <a className="b-float-cart__clear" href={this.props.cartClearUrl}>Очистить корзину</a>
        </div>`