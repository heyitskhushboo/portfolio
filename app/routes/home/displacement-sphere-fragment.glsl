#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

uniform float time;
uniform float themeMode; // 0.0 = dark, 1.0 = light
varying vec2 vUv;
varying vec3 newPosition;
varying float noise;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

  float t = clamp(vUv.x * 0.6 + vUv.y * 0.4 + noise * 0.3, 0.0, 1.0);

  // Dark theme: rich navy (#1a1f5e) → blue-purple → dusty rose (#c4a8b8)
  vec3 darkA = vec3(0.10, 0.12, 0.37);
  vec3 darkB = vec3(0.40, 0.32, 0.45);
  vec3 darkC = vec3(0.77, 0.66, 0.72);
  vec3 darkColor = t < 0.5
    ? mix(darkA, darkB, t * 2.0)
    : mix(darkB, darkC, (t - 0.5) * 2.0);

  // Light theme: sky blue (#a8d4f5) → white-lavender (#e8e4ff) → soft pink (#f5c6ec)
  vec3 lightA = vec3(0.66, 0.83, 0.96);
  vec3 lightB = vec3(0.91, 0.89, 1.00);
  vec3 lightC = vec3(0.96, 0.78, 0.93);
  vec3 lightColor = t < 0.5
    ? mix(lightA, lightB, t * 2.0)
    : mix(lightB, lightC, (t - 0.5) * 2.0);

  vec3 baseColor = mix(darkColor, lightColor, themeMode);

  vec4 diffuseColor = vec4(baseColor, 1.0);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
