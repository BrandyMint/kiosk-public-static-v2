import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import designOptions from '../../models/designOptions';
import Scroller from '../common/Scroller';
import DesignSettingsGroup from './DesignSettingsGroup';
import DesignSettingsOption from './DesignSettingsOption';
import DesignSettingsSlider from './DesignSettingsSlider';
import DesignSettingsRadioList from './DesignSettingsRadioList';
import DesignSettingsCheckbox from './DesignSettingsCheckbox';
import DesignSettingsAttach from './DesignSettingsAttach';
import DesignSettingsSaveButton from './DesignSettingsSaveButton';
import DesignSettingsCloseButton from './DesignSettingsCloseButton';

export default class DesignSettings {
  static propTypes = {
    current: PropTypes.instanceOf(Map).isRequired,
    unsavedFields: PropTypes.object.isRequired,
    isSaving: PropTypes.bool.isRequired,
    changeImage: PropTypes.func.isRequired,
    changeOption: PropTypes.func.isRequired,
    saveChanges: PropTypes.func.isRequired,
    closeDesignSettingsPopup: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="design-settings">
        <header className="design-settings__header">
          <span>Управление дизайном</span>
          <DesignSettingsCloseButton onClick={this.props.closeDesignSettingsPopup} />
        </header>
        <div className="design-settings__body">
          <Scroller className="design-settings__scroll">
            <DesignSettingsGroup title="Главная страница">
              <DesignSettingsOption title="Товаров в ряд">
                <DesignSettingsRadioList {...this.getProps('mainPageProductsInRow')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Строк товаров">
                <DesignSettingsSlider {...this.getProps('mainPageRows')} displayValue={true} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать Instagram">
                <DesignSettingsCheckbox {...this.getProps('mainPageInstagram')} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать слайдер">
                <DesignSettingsCheckbox {...this.getProps('mainPageSlider')} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать баннер">
                <DesignSettingsCheckbox {...this.getProps('mainPageBanner')} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать фильтр">
                <DesignSettingsCheckbox {...this.getProps('mainPageFilter')} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Страница категории">
              <DesignSettingsOption title="Товаров в ряд">
                <DesignSettingsRadioList {...this.getProps('categoryPageProductsInRow')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Строк товаров">
                <DesignSettingsSlider {...this.getProps('categoryPageRows')} displayValue={true} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать Instagram">
                <DesignSettingsCheckbox {...this.getProps('categoryPageInstagram')} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать слайдер">
                <DesignSettingsCheckbox {...this.getProps('categoryPageSlider')} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать баннер">
                <DesignSettingsCheckbox {...this.getProps('categoryPageBanner')} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать фильтр">
                <DesignSettingsCheckbox {...this.getProps('categoryPageFilter')} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Страница товара">
              <DesignSettingsOption title="Фото">
                <DesignSettingsRadioList {...this.getProps('productPagePhoto')} />
              </DesignSettingsOption>
              <DesignSettingsOption inRow={true} title="Показывать подобные товары">
                <DesignSettingsCheckbox {...this.getProps('productPageSimilarProducts')} />
              </DesignSettingsOption>
            </DesignSettingsGroup>

            <DesignSettingsGroup title="Общие настройки">
              <DesignSettingsOption title="Логотип (желательно .SVG)">
                <DesignSettingsAttach
                  {...this.getAttachProps('logo')}
                  className="design-settings__attach--image"
                >
                  {(SelectFile) =>
                     <SelectFile className="select-file--icon select-file--icon-pencil" />
                  }
                </DesignSettingsAttach>
              </DesignSettingsOption>
              <DesignSettingsOption title="Фон страницы">
                <DesignSettingsAttach
                  {...this.getAttachProps('pageBg')}
                  className="design-settings__attach--image"
                >
                  {(SelectFile) =>
                     <SelectFile className="select-file--icon select-file--icon-pencil" />
                  }
                </DesignSettingsAttach>
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет страницы">
                <DesignSettingsRadioList {...this.getProps('pageBgColor')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет ленты">
                <DesignSettingsRadioList {...this.getProps('feedBgColor')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Прозрачность ленты">
                <DesignSettingsSlider {...this.getProps('feedTransparency')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Цвет текста">
                <DesignSettingsRadioList {...this.getProps('fontColor')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Шрифт">
                <DesignSettingsRadioList {...this.getProps('fontFamily')} />
              </DesignSettingsOption>
              <DesignSettingsOption title="Размер шрифта">
                <DesignSettingsRadioList {...this.getProps('fontSize')} />
              </DesignSettingsOption>
            </DesignSettingsGroup>
          </Scroller>
        </div>
        <div className="design-settings__footer">
          <DesignSettingsSaveButton
            isSaving={this.props.isSaving}
            unsavedFields={this.props.unsavedFields}
            onClick={this.props.saveChanges}
          />
        </div>
      </div>
    );
  }

  getProps(property) {
    const { current, changeOption } = this.props;
    return {
      ...designOptions[property],
      value: current.get(property),
      onChange: changeOption.bind(this, property)
    };
  }
  getAttachProps(property) {
    const { current, changeImage } = this.props;
    return {
      ...designOptions[property + 'Url'],
      value: current.get(property + 'Url'),
      onChange: changeImage.bind(this, property)
    }
  }
}