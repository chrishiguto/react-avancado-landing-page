import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

/* import icons from './content' */
import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map((tech) => (
          <S.Icon key={tech.title}>
            <S.Icons
              src={getImageUrl(tech.icon.url)}
              alt={tech.icon.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{tech.title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
