import { useColorMode } from '@chakra-ui/react';
import { StyleConfig } from '@chakra-ui/theme-tools';
import { FC, SVGProps } from 'react';

type Props = StyleConfig & SVGProps<SVGSVGElement>;

export const Freshworks: FC<Props> = ({ color }) => {
  const { colorMode } = useColorMode();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="138" height="29" fill="none">
      <g clip-path="url(#a)">
        <path
          fill={color ? color : colorMode === 'light' ? 'black' : 'white'}
          d="M33.627.78c-3.473 0-4.692 2.423-4.692 4.685v1.384h-.736a.934.934 0 0 0-.943.947c0 .53.414.946.943.946h.736v9.554c0 .554.437 1.015 1.012 1.015.552 0 1.012-.438 1.012-1.015V8.742h2.23a.934.934 0 0 0 .944-.946.934.934 0 0 0-.943-.947h-2.231V5.465c0-1.27.46-2.77 2.69-2.77a.934.934 0 0 0 .944-.946c-.023-.554-.437-.97-.966-.97ZM41.446 6.526c-1.494 0-2.76.624-3.473 1.639v-.53c0-.555-.437-1.016-1.012-1.016-.552 0-1.012.438-1.012 1.015v10.662c0 .554.437 1.015 1.012 1.015.552 0 1.012-.438 1.012-1.015v-5.885c0-2.469 1.312-3.946 3.473-3.946.53 0 .966-.438.966-.97.024-.53-.414-.969-.966-.969ZM53.751 11.765c0-.577-.092-2.076-.966-3.323-.897-1.292-2.3-1.961-4.209-1.961-3.542 0-5.566 2.354-5.566 6.462 0 4.246 2.024 6.507 5.819 6.507 2.553 0 3.956-1.269 4.21-1.523.16-.161.344-.369.344-.715a.924.924 0 0 0-.92-.923.903.903 0 0 0-.575.184c-.736.554-1.587 1.108-3.036 1.108-2.277 0-3.726-1.5-3.795-3.946h7.475c1.22-.023 1.22-1.131 1.22-1.87Zm-5.175-3.438c2.07 0 3.151 1.177 3.197 3.485H45.08c.184-2.239 1.426-3.485 3.496-3.485ZM60.513 11.927c-1.495-.508-2.783-.97-2.783-2.077 0-1.223 1.357-1.408 2.162-1.408 1.45 0 2.162.508 2.737 1.062a.924.924 0 0 0 1.587-.646c0-.277-.115-.462-.207-.6-.85-1.131-2.3-1.754-4.117-1.754-2.576 0-4.163 1.292-4.163 3.346 0 2.515 2.208 3.277 4.14 3.923 1.472.508 2.737.923 2.737 2.008 0 1.477-1.633 1.708-2.622 1.708-1.334 0-2.369-.416-3.22-1.247a.969.969 0 0 0-.69-.3.924.924 0 0 0-.92.924c0 .207.07.369.23.6.76.969 2.484 1.961 4.6 1.961 2.898 0 4.623-1.361 4.623-3.623 0-2.446-2.162-3.208-4.094-3.877ZM72.45 6.48c-1.38 0-2.622.555-3.312 1.432V1.08c0-.554-.437-1.016-1.012-1.016-.552 0-1.012.439-1.012 1.016V18.32c0 .553.438 1.015 1.012 1.015.552 0 1.012-.438 1.012-1.015v-6.485c0-2.331 1.127-3.508 3.312-3.508 2.116 0 2.99.97 2.99 3.323v6.67c0 .553.437 1.015 1.012 1.015.552 0 1.012-.438 1.012-1.015v-7.016c-.046-3.208-1.725-4.823-5.014-4.823ZM94.186 6.643c-.438 0-.783.254-.944.67l-2.875 8.215-2.346-8.216c-.092-.323-.436-.67-.943-.67-.506 0-.85.347-.943.67l-2.346 8.193-2.875-8.216a.967.967 0 0 0-.942-.646c-.552 0-1.013.438-1.013 1.015 0 .139.023.277.092.416l3.841 10.592c.161.416.506.646.944.646.46 0 .85-.3.966-.715l2.253-7.777 2.254 7.777c.115.415.53.715.966.715.437 0 .782-.253.943-.669L95.06 8.051c.07-.139.093-.3.093-.439.022-.53-.414-.97-.966-.97ZM101.499 6.48c-3.657 0-5.658 2.308-5.658 6.463 0 4.2 2.001 6.507 5.658 6.507 3.657 0 5.658-2.307 5.658-6.507 0-4.178-2.024-6.462-5.658-6.462Zm0 11.124c-2.438 0-3.634-1.523-3.634-4.638 0-3.07 1.22-4.616 3.634-4.616 2.415 0 3.634 1.546 3.634 4.616 0 3.115-1.196 4.638-3.634 4.638ZM114.932 6.526c-1.495 0-2.76.624-3.473 1.639v-.53c0-.555-.437-1.016-1.012-1.016-.552 0-1.012.438-1.012 1.015v10.662c0 .554.437 1.015 1.012 1.015.552 0 1.012-.438 1.012-1.015v-5.885c0-2.469 1.311-3.946 3.473-3.946a.973.973 0 0 0 .966-.97c0-.53-.437-.969-.966-.969ZM122.567 11.789l4.164-3.347c.344-.277.39-.623.39-.807 0-.554-.437-1.016-1.012-1.016a.983.983 0 0 0-.69.254l-5.911 4.846V1.081c0-.554-.437-1.016-1.012-1.016-.552 0-1.011.439-1.011 1.016V18.32c0 .553.437 1.015 1.011 1.015.552 0 1.012-.438 1.012-1.015v-4.154l1.403-1.131 4.531 5.838c.253.3.529.462.851.462.552 0 1.013-.438 1.013-1.015a.948.948 0 0 0-.208-.623l-4.531-5.908ZM133.906 11.927c-1.495-.508-2.783-.97-2.783-2.077 0-1.223 1.357-1.408 2.162-1.408 1.449 0 2.162.508 2.737 1.062a.924.924 0 0 0 1.587-.646c0-.3-.161-.508-.207-.6-.851-1.131-2.3-1.754-4.117-1.754-2.576 0-4.163 1.292-4.163 3.346 0 2.515 2.208 3.277 4.14 3.923 1.472.508 2.737.923 2.737 2.008 0 1.477-1.633 1.708-2.622 1.708-1.334 0-2.369-.416-3.22-1.247a.935.935 0 0 0-.69-.3.924.924 0 0 0-.92.924c0 .207.069.369.23.6.759.969 2.484 1.961 4.6 1.961 2.898 0 4.623-1.361 4.623-3.623 0-2.446-2.162-3.208-4.094-3.877Z"
        />
        <path
          fill="#9B65C3"
          d="M.138 17.743a11.907 11.907 0 0 0 3.312 6.6l4.025-4.038c0-4.085 2.116-8.054 5.888-10.247L.138 17.743Z"
        />
        <path
          fill="#9B65C3"
          d="M7.475 20.304a11.65 11.65 0 0 1-5.888-1.592 12.39 12.39 0 0 1-1.449-.992 11.907 11.907 0 0 0 3.312 6.6l4.025-4.016Z"
        />
        <path
          fill="#BE63C5"
          d="M7.475 20.304 3.45 24.342a11.622 11.622 0 0 0 6.578 3.323l7.636-13.27a11.718 11.718 0 0 1-10.19 5.909Z"
        />
        <path
          fill="#BF63C6"
          d="M9.062 26.235a11.75 11.75 0 0 1-1.587-5.908L3.45 24.366a11.622 11.622 0 0 0 6.578 3.323 15.925 15.925 0 0 1-.966-1.454Z"
        />
        <path
          fill="#3278B1"
          d="m22.471 4.795-9.085 5.285c-3.772 2.192-8.257 2.03-11.776 0a11.695 11.695 0 0 0-1.449 7.662c.46.369.943.692 1.45.992a11.65 11.65 0 0 0 5.887 1.592L22.724 5.05c-.092-.092-.16-.185-.253-.254Z"
        />
        <path
          fill="#3278B2"
          d="M1.587 18.735a11.65 11.65 0 0 0 5.888 1.593c0-4.085 2.116-8.055 5.888-10.247L.115 17.743c.483.346.966.692 1.472.992Z"
        />
        <path
          fill="#45A4EC"
          d="M1.587 10.081a11.695 11.695 0 0 0-1.449 7.662l13.248-7.662a11.833 11.833 0 0 1-11.799 0Z"
        />
        <path
          fill="#19BB7D"
          d="M22.724 5.028c-.07-.07-.161-.162-.253-.231-.115-.092-.23-.185-.368-.254a2.926 2.926 0 0 0-1.472-.392h-8.832c-4.37 0-8.165 2.377-10.212 5.908 3.519 2.03 8.004 2.192 11.776 0a11.837 11.837 0 0 0-5.888 10.246c4.07 0 8.027-2.123 10.212-5.908l5.244-9.116c-.07-.092-.138-.184-.207-.253Z"
        />
        <path
          fill="#08C7FB"
          d="M13.386 10.08 22.47 4.82c-.115-.093-.23-.185-.368-.254L1.587 10.08a11.833 11.833 0 0 0 11.799 0Z"
        />
        <path
          fill="#59F2F6"
          d="M20.63 4.15H11.8c-4.37 0-8.165 2.378-10.212 5.909l20.516-5.516c-.437-.23-.92-.392-1.472-.392Z"
        />
        <path
          fill="#DA3757"
          d="m17.687 14.397 5.244-9.116a2.287 2.287 0 0 0-.23-.254L7.475 20.305c0 2.007.506 4.038 1.587 5.907.3.508.621.993.99 1.454.574.093 1.15.139 1.747.139 2.14 0 4.163-.577 5.888-1.593-2.024-3.53-2.185-8.03 0-11.815Z"
        />
        <path
          fill="#D33C4E"
          d="M7.475 20.304c0 2.007.506 4.038 1.587 5.908.3.507.621.992.99 1.453l7.635-13.27a11.782 11.782 0 0 1-10.212 5.909Z"
        />
        <path
          fill="#EE5A24"
          d="m17.687 14.396-7.636 13.293a11.597 11.597 0 0 0 7.636-1.454c-2.024-3.554-2.185-8.055 0-11.84Z"
        />
        <path
          fill="#8BDF55"
          d="M23.185 5.649c-.07-.139-.161-.254-.253-.37-.07-.092-.138-.16-.23-.253-.07-.07-.161-.162-.253-.23l-9.062 5.284a11.837 11.837 0 0 0-5.888 10.246c4.07 0 8.027-2.123 10.212-5.908-2.185 3.785-2.024 8.285 0 11.816 3.519-2.054 5.888-5.862 5.888-10.246V7.126c-.023-.554-.161-1.062-.414-1.477Z"
        />
        <path
          fill="#25C16F"
          d="m22.472 4.795-9.085 5.285a11.837 11.837 0 0 0-5.888 10.246L22.725 5.05c-.092-.092-.161-.185-.253-.254Z"
        />
        <path
          fill="#8BDF55"
          d="M7.475 20.305c4.071 0 8.027-2.124 10.212-5.908l5.244-9.116a2.287 2.287 0 0 0-.23-.254L7.475 20.304Z"
        />
        <path
          fill="#FB0"
          d="m22.931 5.281-5.244 9.116c-2.185 3.784-2.024 8.285 0 11.815l5.497-20.585c-.069-.115-.16-.23-.253-.346Z"
        />
        <path
          fill="#FFA800"
          d="M17.688 26.235c3.519-2.054 5.888-5.862 5.888-10.247V7.126c0-.53-.138-1.038-.391-1.476l-5.497 20.585Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .065h138v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
