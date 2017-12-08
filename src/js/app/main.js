(function ($, Swiper) {
  $(function () {

    // инициализация слайдера на детальных страницах
    {
      new Swiper('.js-detail-slider', {
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }

    // табы
    {
      const $tab = $('.js-tab')
      const $sections = $('.tabs__section')
      $tab.on('click', (e) => {
        e.preventDefault()
        const $this = $(e.currentTarget)
        const $target = $(e.currentTarget.dataset.target)
        const activeClass = 'active'
        $tab.removeClass(activeClass)
        $this.addClass(activeClass)
        $sections.removeClass(activeClass)
        $target.addClass(activeClass)
      })
    }

    // аккордеон
    {
      const $accordion = $('.js-accordion')
      $accordion.each((index, el) => {
        const $this = $(el)
        if ($this.hasClass('open'))
          $this.parent().find('.accordion__section').css('display', 'block')
      })
      $accordion.on('click', (e) => {
        e.preventDefault()
        const $this = $(e.currentTarget)
        $this.parent().find('.accordion__section').slideToggle()
        $this.toggleClass('open')
      })
    }

    // фокус инпута
    {
      $('.form__input')
        .on('focus', (e) => {
          const $this = $(e.currentTarget)
          const $parent = $this.parent()
          const invalidClass = 'invalid'
          $parent.addClass('focus')
          if ($parent.hasClass(invalidClass)) {
            $this.on('change', () => { $parent.removeClass(invalidClass) })
          }
        })
        .on('focusout', (e) => { $(e.currentTarget).parent().removeClass('focus') })
    }

    // закрытие окна уведомления у формы
    {
      $('.js-close').on('click', (e) => {
        const $this = $(e.currentTarget)
        const $parent = $this.parent()
        $parent.animate({opacity: 0}, 300, () => { $parent.remove() })
      })
    }

    // инициализация слайдера партнеров
    {
      new Swiper('.js-partners-slider', {
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }

    // mobile
    {
      const $mobileMenu = $('.mobile-menu')
      $('.mobile__button').on('click', () => {
        $('.page').toggleClass('mobile-open')
      })

      const $mobileParent = $mobileMenu.find('li.parent')
      const activeClass = 'active'
      $mobileParent.on('click', (e) => {
        e.preventDefault()
        const $this = $(e.currentTarget)
        if ($this.hasClass(activeClass)) {
          $this.removeClass(activeClass)
          $this.find('ul').slideUp()
        } else {
          $mobileParent.each((index, el) => {
            $(el)
              .removeClass(activeClass)
              .find('ul').slideUp()
          })
          $this.addClass(activeClass)
          $this.find('ul').slideDown()
        }
      })

      const $page = $('.page')
      const mobileOpenClass = 'mobile-open'
      $(window).resize((e) => {
        if ($page.hasClass(mobileOpenClass) && e.currentTarget.innerWidth > 1024) {
          $page.removeClass(mobileOpenClass)
          $mobileParent
            .removeClass(activeClass)
            .find('ul').removeAttr('style')
        }
      })

      /*let duration = 300
      $('.mobile-menu > ul > li, .mobile-contacts').each((index, el) => {
        $(el).css('transition-delay', duration + 'ms')
        duration += 100
      })*/
    }

    // инициализация слайдера последних работ
    {
      new Swiper('.js-works', { slidesPerView: 'auto' })
    }

  })
})(jQuery, Swiper)
