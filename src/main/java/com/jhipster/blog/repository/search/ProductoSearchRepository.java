package com.jhipster.blog.repository.search;

import com.jhipster.blog.domain.Producto;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Producto entity.
 */
public interface ProductoSearchRepository extends ElasticsearchRepository<Producto, Long> {
}
