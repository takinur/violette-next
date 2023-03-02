
{{#if settings.show_product_reviews}}
  <section class="product-column-section product-reviews">
    <header class="product-column-header">
      <h1 class="product-column-heading review-header">
        <span class="review-header-text">
          {{lang 'product.reviews.heading'}}
        </span>

        <span class="review-header-information" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
          {{#if settings.show_product_rating}}
            <meta itemprop="ratingValue" content="{{product.rating}}">
            <meta itemprop="ratingCount" content="{{product.num_reviews}}">
            {{> components/common/rating-stars rating=product.rating star_size="medium"}}
            {{{snippet 'product_rating'}}}
          {{/if}}

          {{#if settings.show_product_reviews}}
            <meta itemprop="reviewCount" content="{{product.num_reviews}}">
            <span class="review-count">
              {{#if settings.show_product_rating}}
                {{product.rating}}
              {{/if}}
              {{{lang 'product.reviews.total_based_on' numReviews=product.num_reviews}}}
            </span>

            <a href="#modal-review-form" class="review-link">
              {{lang 'product.reviews.write_review'}}
            </a>
          {{/if}}
        </span>
      </h1>
    </header>

    {{{snippet 'reviews'}}}

    {{#each product.reviews.list}}
      {{> components/reviews/review-item show-ratings=../settings.show_product_rating}}
    {{/each}}

    {{!-- TODO: Load in more reviews based on pagination via ajax}}
    <div class="product-column-row" id="product-reviews-load-more">
      <a href="#product-reviews-load-more" class="button secondary button-wide button-large">{{lang 'product.reviews.load_review'}}</a>
    </div>--}}
  </section>
{{/if}}



