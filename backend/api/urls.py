from django.contrib import admin
from django.urls import path, include

from drf_spectacular.views import SpectacularAPIView
from drf_spectacular.views import SpectacularRedocView
from drf_spectacular.views import SpectacularSwaggerView


def prefix(str):
    return "api/" + str


urlpatterns = [
    path(prefix("admin/"), admin.site.urls),
    path(prefix("health/"), include("api.health.urls")),
    path(prefix("image/"), include("api.image.urls")),
    path(prefix("core/"), include("api.core.urls")),
    path(prefix("proprieties/"), include("api.proprieties.urls")),
    path(prefix("similarityMap/"), include("api.similarityMap.urls")),
    # Dynamic API documentation endpoints
    path(prefix("schema/yaml/"), SpectacularAPIView.as_view(), name="schema"),
    path(
        prefix("schema/"),
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path(
        prefix("schema/redoc/"),
        SpectacularRedocView.as_view(url_name="schema"),
        name="redoc",
    ),
]
