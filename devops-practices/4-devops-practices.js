<project>
  <scm class="git">
    <url>git@github.com:username/repo.git</url>
  </scm>
  <triggers>
    <scm>H/5 * * * *</scm>
  </triggers>
  <builders>
    <invokeAnt>
      <targets>deploy</targets>
    </invokeAnt>
  </builders>
</project>
